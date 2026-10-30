import styles from './page.module.css';
import CoverPlayer from './CoverPlayer';
import type { FeaturedRelease } from './releases';

// Cover, title, streaming rows and Bandcamp button — used on the homepage and on release pages.
export default function ReleaseHero({ release }: { release: FeaturedRelease }) {
  return (
    <section className={styles.hero} aria-labelledby="featured-title">
      <p className={styles.label}>
        <span className={styles.glowDot} aria-hidden="true" />
        {release.label}
      </p>
      <CoverPlayer cover={release.cover} title={release.title} preview={release.preview} />
      <h1 id="featured-title" className={styles.heroTitle}>{release.title}</h1>

      <ul className={styles.streamList}>
        {release.stream.map((s, i) => (
          <li key={s.label}>
            <a href={s.url} className={styles.streamRow} target="_blank" rel="noopener noreferrer">
              <span className={styles.rowIndex}>{String(i + 1).padStart(2, '0')}</span>
              <span className={styles.rowLabel}>{s.label}</span>
              <span className={styles.rowArrow} aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>

      {release.bandcamp && (
        <a href={release.bandcamp} className={styles.buyButton} target="_blank" rel="noopener noreferrer">
          Buy on Bandcamp
        </a>
      )}
      {release.extended && (
        <a href={release.extended} className={styles.extendedLink} target="_blank" rel="noopener noreferrer">
          Extended version for DJs ↗
        </a>
      )}
      {release.visualizer && (
        <a href={release.visualizer} className={styles.textLink} target="_blank" rel="noopener noreferrer">
          Watch the visualizer ↗
        </a>
      )}
    </section>
  );
}
