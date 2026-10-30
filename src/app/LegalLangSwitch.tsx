import Link from 'next/link';
import styles from './legal.module.css';

// "Deutsch | English" toggle between /datenschutz and /privacy.
export default function LegalLangSwitch({ current }: { current: 'de' | 'en' }) {
  return (
    <nav className={styles.langSwitch} aria-label="Language">
      <Link href="/datenschutz" aria-current={current === 'de' ? 'page' : undefined} lang="de">Deutsch</Link>
      <span aria-hidden="true">|</span>
      <Link href="/privacy" aria-current={current === 'en' ? 'page' : undefined} lang="en">English</Link>
    </nav>
  );
}
