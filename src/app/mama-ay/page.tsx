import type { Metadata } from 'next';
import styles from '../page.module.css';
import { dmSans } from '../fonts';
import ReleaseHero from '../ReleaseHero';
import GetNotified from '../GetNotified';
import { SiteFooter, SiteHeader } from '../Site';
import { mamaAy } from '../releases';

// Standalone release page, linked from the releases grid on the homepage.
const description = 'Mama Ay by Dixxa & Raph Milla. Out now on Spotify and Apple Music.';

export const metadata: Metadata = {
  title: 'Mama Ay – Dixxa & Raph Milla',
  description,
  alternates: { canonical: '/mama-ay' },
  openGraph: {
    type: 'music.song',
    url: 'https://www.raphmilla.com/mama-ay',
    title: 'Mama Ay – Dixxa & Raph Milla',
    description,
    images: [{ url: 'https://www.raphmilla.com/releases/mama-ay.jpg', width: 800, height: 800, alt: 'Mama Ay cover' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mama Ay – Dixxa & Raph Milla',
    description,
    images: ['https://www.raphmilla.com/releases/mama-ay.jpg'],
  },
};

export default function MamaAy() {
  return (
    <div className={`${dmSans.variable} ${styles.page}`}>
      <main className={styles.main}>
        <SiteHeader />
        <ReleaseHero release={mamaAy} />
        <GetNotified />
      </main>
      <SiteFooter />
    </div>
  );
}
