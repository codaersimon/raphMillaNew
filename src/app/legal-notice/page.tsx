import type { Metadata } from "next";
import styles from '../legal.module.css';
import { dmSans } from '../fonts';
import LegalLangSwitch from '../LegalLangSwitch';

export const metadata: Metadata = {
  title: "Legal Notice - Raph Milla",
  description: "Legal notice and contact information for Raph Milla",
  alternates: { canonical: '/legal-notice', languages: { de: '/impressum', en: '/legal-notice' } },
};

// English version of /impressum. Keep both in sync; the German version is the legally binding one.
export default function LegalNotice() {
  return (
    <>
      <div className={`${dmSans.variable} ${styles.page}`}>
        <div className={styles.container}>
          <LegalLangSwitch current="en" de="/impressum" en="/legal-notice" />
          <h1 className={styles.title} lang="en">Legal Notice</h1>

          <div className={styles.content} lang="en">
            <h2>Information pursuant to Section 5 DDG (German Digital Services Act)</h2>
            <p>
              Maximilian Raphael Müller<br />
              Rietberg 8<br />
              29396 Schönewörde<br />
              Germany
            </p>

            <h2>Contact</h2>
            <p>
              Email: bookings@raphmilla.com
            </p>

            <h2>Responsible for content pursuant to Section 18(2) MStV</h2>
            <p>
              Maximilian Raphael Müller<br />
              Rietberg 8<br />
              29396 Schönewörde<br />
              Germany
            </p>

            <h2>Disclaimer</h2>
            <h3>Liability for content</h3>
            <p>
              This is a non-commercial website of a self-employed DJ without a company form within the meaning of the German Commercial Code (HGB).
            </p>

            <h3>Liability for links</h3>
            <p>
              This website contains links to external third-party websites over whose content I have no influence. I therefore cannot accept any liability for this external content. The respective provider or operator of the linked pages is always responsible for their content.
            </p>

            <p>This is a translation of the German legal notice (<a href="/impressum">Impressum</a>); the German version is legally binding.</p>
          </div>
        </div>
      </div>
    </>
  );
}
