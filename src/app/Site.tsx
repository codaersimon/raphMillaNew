import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import { socials } from './releases';
import SocialsMenu from './SocialsMenu';

// Logo, tagline and social icons — shared by the homepage and release pages.
export function SiteHeader() {
  return (
    <header className={styles.header}>
      {/* Logo leads back to the homepage from release pages */}
      <Link href="/" aria-label="Raph Milla – home">
        <Image src="/logo-gold.svg" alt="Raph Milla" width={168} height={26} className={styles.logo} priority />
      </Link>
      <p className={styles.kicker}>DJ &amp; Producer · Hannover</p>
      {/* Phones: icons always visible. Desktop: folded into the Socials button. */}
      <nav className={`${styles.socials} ${styles.mobileOnlyFlex}`} aria-label="Social media">
        {socials.filter((s) => s.url).map((s) => (
          <a key={s.label} href={s.url} className={styles.socialIcon} aria-label={s.label} target="_blank" rel="noopener noreferrer">
            <Image src={s.icon} alt="" width={18} height={18} />
          </a>
        ))}
      </nav>
      <div className={styles.desktopOnly}>
        <SocialsMenu />
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} Raph Milla</span>
      {/* Bilingual labels; each page has a Deutsch | English switch */}
      <Link href="/impressum">Impressum / Legal notice</Link>
      <Link href="/datenschutz">Datenschutz / Privacy</Link>
    </footer>
  );
}
