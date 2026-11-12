'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { socials } from './releases';

// Desktop header: a "Socials" button whose icons fold out on hover. A click pins them open
// until the visitor scrolls or clicks somewhere else.
export default function SocialsMenu() {
  const [hover, setHover] = useState(false);
  const [pinned, setPinned] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const open = hover || pinned;

  useEffect(() => {
    if (!pinned) return;
    const close = () => setPinned(false);
    const onPointerDown = (e: PointerEvent) => {
      if (!ref.current?.contains(e.target as Node)) close();
    };
    window.addEventListener('scroll', close, { passive: true });
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      window.removeEventListener('scroll', close);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [pinned]);

  return (
    <div
      ref={ref}
      className={styles.socialsMenu}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <button
        type="button"
        className={styles.socialsToggle}
        aria-expanded={open}
        aria-controls="header-socials"
        onClick={() => setPinned((p) => !p)}
      >
        Socials
        <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <nav id="header-socials" className={styles.socialsPanel} aria-label="Social media" inert={!open}>
        <div className={styles.socials}>
          {socials.filter((s) => s.url).map((s) => (
            <a key={s.label} href={s.url} className={styles.socialIcon} aria-label={s.label} target="_blank" rel="noopener noreferrer">
              <Image src={s.icon} alt="" width={18} height={18} />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
