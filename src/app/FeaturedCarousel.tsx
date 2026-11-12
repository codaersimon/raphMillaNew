'use client';

import { useRef, useState, type CSSProperties, type PointerEvent } from 'react';
import styles from './page.module.css';
import CoverPlayer from './CoverPlayer';
import { ReleaseLinks } from './ReleaseHero';
import type { FeaturedRelease } from './releases';

const SLOTS = [-2, -1, 0, 1, 2];
const mod = (n: number, m: number) => ((n % m) + m) % m;

// Swipeable covers for the homepage: the current release in the middle, its neighbours peeking in
// at the sides, endless in both directions. The links below always belong to the release in the middle.
export default function FeaturedCarousel({ releases }: { releases: FeaturedRelease[] }) {
  // pos counts swipes without wrapping, so every slide keeps its key while the row moves
  const [pos, setPos] = useState(0);
  const [step, setStep] = useState(0);
  const [offset, setOffset] = useState(0);
  const [animating, setAnimating] = useState(false);
  const drag = useRef<{ id: number; x: number; y: number; active: boolean } | null>(null);
  const suppressClick = useRef(false);
  const rowRef = useRef<HTMLDivElement>(null);

  const current = releases[mod(pos, releases.length)];
  const loop = releases.length > 1;

  function go(dir: number) {
    if (animating || !dir) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPos((p) => p + dir);
      setOffset(0);
      return;
    }
    setAnimating(true);
    setStep(dir);
    setOffset(0);
  }

  function onTransitionEnd(e: React.TransitionEvent) {
    if (e.target !== rowRef.current) return;
    setAnimating(false);
    if (step) {
      setPos((p) => p + step);
      setStep(0);
    }
  }

  function onPointerDown(e: PointerEvent<HTMLDivElement>) {
    if (!loop || animating || (e.target as HTMLElement).closest('button, [role="slider"]')) return;
    drag.current = { id: e.pointerId, x: e.clientX, y: e.clientY, active: false };
  }

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    if (!d || d.id !== e.pointerId) return;
    const dx = e.clientX - d.x;
    if (!d.active) {
      if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(e.clientY - d.y)) return;
      d.active = true;
      e.currentTarget.setPointerCapture(e.pointerId);
    }
    setOffset(dx);
  }

  function onPointerUp(e: PointerEvent<HTMLDivElement>) {
    const d = drag.current;
    drag.current = null;
    if (!d?.active) return;
    suppressClick.current = true;
    const dx = e.clientX - d.x;
    const slide = rowRef.current?.querySelector<HTMLElement>('[data-slot="0"]')?.offsetWidth ?? 300;
    if (Math.abs(dx) > slide * 0.18) go(dx < 0 ? 1 : -1);
    else if (dx !== 0) {
      setAnimating(true);
      setOffset(0);
    }
  }

  const rowStyle: CSSProperties = {
    transform: `translateX(calc(${-step} * (var(--slide) + var(--gap)) + ${offset}px))`,
    transition: animating ? 'transform 0.45s cubic-bezier(0.2, 0.7, 0.2, 1)' : 'none',
  };

  return (
    <section
      className={`${styles.hero} ${current.accent === 'ember' ? styles.heroEmber : ''}`}
      aria-roledescription="carousel"
      aria-label="New releases"
    >
      <h1 className={styles.srOnly}>Raph Milla – new releases</h1>
      <p className={styles.label}>
        <span className={styles.glowDot} aria-hidden="true" />
        {current.label}
      </p>

      <div
        className={styles.carousel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onDragStart={(e) => e.preventDefault()}
        onClickCapture={(e) => {
          if (suppressClick.current) {
            suppressClick.current = false;
            e.preventDefault();
            e.stopPropagation();
          }
        }}
      >
        <div ref={rowRef} className={styles.carouselRow} style={rowStyle} onTransitionEnd={onTransitionEnd}>
          {(loop ? SLOTS : [0]).map((k) => {
            const r = releases[mod(pos + k, releases.length)];
            const isCurrent = k === 0;
            // Styled as current as soon as the row starts moving towards it
            const looksCurrent = k === step;
            return (
              <div
                key={pos + k}
                data-slot={k}
                className={`${styles.slide} ${r.accent === 'ember' ? styles.heroEmber : ''} ${looksCurrent ? styles.slideCurrent : ''}`}
                aria-hidden={!isCurrent}
                inert={!isCurrent}
                onClick={isCurrent ? undefined : () => go(Math.sign(k))}
              >
                <CoverPlayer
                  cover={r.cover}
                  title={r.title}
                  preview={isCurrent ? r.preview : undefined}
                  href={isCurrent ? r.page : undefined}
                />
                <h2 className={styles.slideTitle}>{r.title}</h2>
                <p className={styles.slideArtists}>{r.artists ?? 'Raph Milla'}</p>
              </div>
            );
          })}
        </div>

        {loop && (
          <>
            <button type="button" className={`${styles.carouselArrow} ${styles.carouselPrev}`} onClick={() => go(-1)} aria-label="Previous release">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
            <button type="button" className={`${styles.carouselArrow} ${styles.carouselNext}`} onClick={() => go(1)} aria-label="Next release">
              <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </>
        )}
      </div>

      {loop && (
        <div className={styles.carouselDots}>
          {releases.map((r, i) => (
            <button
              key={r.title}
              type="button"
              className={styles.carouselDot}
              aria-label={`Show ${r.title}`}
              aria-current={i === mod(pos, releases.length) ? 'true' : undefined}
              onClick={() => go(Math.sign(i - mod(pos, releases.length)))}
            />
          ))}
        </div>
      )}

      <ReleaseLinks release={current} />
    </section>
  );
}
