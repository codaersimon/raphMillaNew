import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { socials } from './releases';

// Logo, tagline and social icons — shared by the homepage and release pages.
export function SiteHeader() {
  return (
    <header className={styles.header}>
      <Image src="/logo-gold.svg" alt="Raph Milla" width={168} height={26} className={styles.logo} priority />
      <p className={styles.kicker}>DJ &amp; Producer · Hannover</p>
      <nav className={styles.socials} aria-label="Social media">
        {socials.filter((s) => s.url).map((s) => (
          <a key={s.label} href={s.url} className={styles.socialIcon} aria-label={s.label} target="_blank" rel="noopener noreferrer">
            <Image src={s.icon} alt="" width={18} height={18} />
          </a>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Raph Milla</span>
      <Link href="/impressum">Impressum</Link>
      <Link href="/datenschutz">Datenschutz</Link>
      <Link href="/privacy">Privacy</Link>
    </footer>
  );
}
