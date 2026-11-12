import type { ReactNode } from 'react';
import styles from './page.module.css';
import CoverPlayer from './CoverPlayer';
import type { FeaturedRelease } from './releases';

// Streaming rows and Bandcamp button of a release.
export function ReleaseLinks({ release }: { release: FeaturedRelease }) {
  return (
    <>
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
    </>
  );
}

// Turns the first mention of each linked name into a link; names without a url stay plain text.
function withLinks(text: string, links: Record<string, string> = {}): ReactNode {
  const name = Object.keys(links).find((n) => links[n] && text.includes(n));
  if (!name) return text;
  const i = text.indexOf(name);
  return (
    <>
      {text.slice(0, i)}
      <a href={links[name]} target="_blank" rel="noopener noreferrer">{name}</a>
      {withLinks(text.slice(i + name.length), { ...links, [name]: '' })}
    </>
  );
}

// Cover, title, about text and links of one release — the top of each release page,
// and stacked on the homepage on phones. Only the first release on a page is the h1.
// On the homepage (linked) the cover leads to the release page instead of showing the about text.
export default function ReleaseHero({
  release,
  primary = true,
  linked = false,
}: {
  release: FeaturedRelease;
  primary?: boolean;
  linked?: boolean;
}) {
  const Heading = primary ? 'h1' : 'h2';
  const titleId = `${release.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-title`;
  return (
    <section className={`${styles.hero} ${release.accent === 'ember' ? styles.heroEmber : ''}`} aria-labelledby={titleId}>
      <p className={styles.label}>
        <span className={styles.glowDot} aria-hidden="true" />
        {release.label}
      </p>
      <CoverPlayer
        cover={release.cover}
        title={release.title}
        preview={release.preview}
        href={linked ? release.page : undefined}
      />
      <Heading id={titleId} className={styles.heroTitle}>{release.title}</Heading>
      {release.artists && <p className={styles.heroArtists}>{release.artists}</p>}
      {!linked && release.about && (
        <div className={styles.heroAbout}>
          {release.about.map((text) => (
            <p key={text}>{withLinks(text, release.aboutLinks)}</p>
          ))}
        </div>
      )}
      <ReleaseLinks release={release} />
    </section>
  );
}
