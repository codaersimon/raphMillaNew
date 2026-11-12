import Image from 'next/image';
import styles from './page.module.css';
import { dmSans } from './fonts';
import ReleaseHero from './ReleaseHero';
import GetNotified from './GetNotified';
import SetPlayer from './SetPlayer';
import { SiteFooter, SiteHeader } from './Site';
import { featured, playlist, releases, sets, socials } from './releases';

export default function Home() {
  return (
    <div className={`${dmSans.variable} ${styles.page} ${styles.pageEmber}`}>
      <main className={styles.main}>
        <SiteHeader />

        {/* Featured releases: the reason most visitors are here */}
        {featured.map((r, i) => (
          <ReleaseHero key={r.title} release={r} primary={i === 0} linked />
        ))}

        <GetNotified />

        {/* Set */}
        <section className={styles.section} aria-labelledby="set-title">
          <div className={styles.sectionHead}>
            <h2 id="set-title" className={styles.sectionTitle}>The set</h2>
          </div>
          <SetPlayer sets={sets} />
        </section>

        {/* Releases */}
        <section className={styles.section} aria-labelledby="releases-title">
          <div className={styles.sectionHead}>
            <h2 id="releases-title" className={styles.sectionTitle}>Releases</h2>
            <span className={styles.sectionMeta}>{releases.length}</span>
          </div>
          <ul className={styles.releaseGrid}>
            {releases.map((r) => (
              <li key={r.title}>
                <a
                  href={r.url}
                  className={styles.releaseCard}
                  {...(r.url.startsWith('/') ? {} : { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <span className={styles.releaseCoverWrap}>
                    <Image src={r.cover} alt={`${r.title} cover`} width={400} height={400} className={styles.releaseCover} sizes="(max-width: 720px) 50vw, 220px" />
                    {r.glow && (
                      <span
                        className={styles.coverGlow}
                        style={{ left: `${r.glow.x}%`, top: `${r.glow.y}%`, width: `${r.glow.size}%` }}
                        aria-hidden="true"
                      />
                    )}
                  </span>
                  {r.type === 'Original' && <span className={styles.releaseType}>{r.type}</span>}
                  <span className={styles.releaseTitle}>{r.title}</span>
                  <span className={styles.releaseArtist}>{r.artist === 'Raph Milla' ? 'Raph Milla' : `${r.artist} · Raph Milla`}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Playlist */}
        <section className={styles.section} aria-labelledby="playlist-title">
          <div className={styles.sectionHead}>
            <h2 id="playlist-title" className={styles.sectionTitle}>The playlist</h2>
          </div>
          <a href={playlist.url} className={styles.playlistCard} target="_blank" rel="noopener noreferrer">
            <Image src={playlist.cover} alt="" width={300} height={300} className={styles.playlistCover} />
            <span className={styles.playlistText}>
              <span className={styles.releaseTitle}>{playlist.title}</span>
              <span className={styles.releaseArtist}>{playlist.description}</span>
              <span className={styles.playlistCta}>
                <Image src="/icons/spotify.svg" alt="" width={14} height={14} /> Listen on Spotify ↗
              </span>
            </span>
          </a>
        </section>

        {/* Socials */}
        <section className={styles.section} aria-labelledby="socials-title">
          <div className={styles.sectionHead}>
            <h2 id="socials-title" className={styles.sectionTitle}>Socials</h2>
          </div>
          <ul className={styles.streamList}>
            {socials.filter((s) => s.url).map((s) => (
              <li key={s.label}>
                <a href={s.url} className={styles.streamRow} target="_blank" rel="noopener noreferrer">
                  <Image src={s.icon} alt="" width={20} height={20} className={styles.socialRowIcon} />
                  <span className={styles.rowLabel}>{s.label}</span>
                  <span className={styles.socialHandle}>{s.handle}</span>
                  <span className={styles.rowArrow} aria-hidden="true">↗</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Bookings */}
        <section className={styles.bookings} aria-labelledby="bookings-title">
          <h2 id="bookings-title" className={styles.label}>Bookings</h2>
          <a href="mailto:bookings@raphmilla.com" className={styles.bookingsMail}>bookings@raphmilla.com</a>
          <p className={styles.sectionMeta}>Hannover, Germany</p>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
