import type { Metadata } from 'next';
import styles from '../page.module.css';
import { dmSans } from '../fonts';
import ReleaseHero from '../ReleaseHero';
import GetNotified from '../GetNotified';
import { SiteFooter, SiteHeader } from '../Site';
import { thatOneGirl } from '../releases';

// Standalone release page: only reachable by its link, not linked from the homepage.
const description = 'That One Girl by Raph Milla. Out now on Spotify, Apple Music, YouTube Music, Amazon Music and Bandcamp.';

export const metadata: Metadata = {
  title: 'That One Girl – Raph Milla',
  description,
  alternates: { canonical: '/that-one-girl' },
  openGraph: {
    type: 'music.song',
    url: 'https://www.raphmilla.com/that-one-girl',
    title: 'That One Girl – Raph Milla',
    description,
    images: [{ url: 'https://www.raphmilla.com/releases/that-one-girl.jpg', width: 800, height: 800, alt: 'That One Girl cover' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'That One Girl – Raph Milla',
    description,
    images: ['https://www.raphmilla.com/releases/that-one-girl.jpg'],
  },
};

export default function ThatOneGirl() {
  return (
    <div className={`${dmSans.variable} ${styles.page}`}>
      <main className={styles.main}>
        <SiteHeader />
        <ReleaseHero release={thatOneGirl} />
        <GetNotified />
      </main>
      <SiteFooter />
    </div>
  );
}
