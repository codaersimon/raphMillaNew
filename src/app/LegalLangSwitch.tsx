import Link from 'next/link';
import styles from './legal.module.css';

// Top bar of a legal page: way back to the homepage, and a "Deutsch | English" toggle
// between the German and English version.
export default function LegalLangSwitch({ current, de, en }: { current: 'de' | 'en'; de: string; en: string }) {
  return (
    <div className={styles.topBar}>
      <Link href="/" className={styles.homeLink}>
        ← {current === 'de' ? 'Startseite' : 'Home'}
      </Link>
      <nav className={styles.langSwitch} aria-label="Language">
        <Link href={de} aria-current={current === 'de' ? 'page' : undefined} lang="de">Deutsch</Link>
        <span aria-hidden="true">|</span>
        <Link href={en} aria-current={current === 'en' ? 'page' : undefined} lang="en">English</Link>
      </nav>
    </div>
  );
}
