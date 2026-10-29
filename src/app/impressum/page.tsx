import type { Metadata } from "next";
import styles from '../legal.module.css';
import { dmSans } from '../fonts';

export const metadata: Metadata = {
  title: "Impressum - Raph Milla",
  description: "Legal notice and contact information for Raph Milla",
  alternates: { canonical: '/impressum' },
};

export default function Impressum() {
  return (
    <>
      <div className={`${dmSans.variable} ${styles.page}`}>
        <div className={styles.container}>
          <h1 className={styles.title}>Impressum</h1>
          
          <div className={styles.content}>
            <h2>Angaben gemäß § 5 DDG</h2>
            <p>
              Maximilian Raphael Müller<br />
              Rietberg 8<br />
              29396 Schönewörde<br />
              Deutschland
            </p>

            <h2>Kontakt</h2>
            <p>
              E-Mail: bookings@raphmilla.com
            </p>

            <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>
              Maximilian Raphael Müller<br />
              Rietberg 8<br />
              29396 Schönewörde<br />
              Deutschland
            </p>

            <h2>Haftungsausschluss</h2>
            <h3>Haftung für Inhalte</h3>
            <p>
              Dies ist ein nicht-gewerblicher Internetauftritt eines selbstständig auftretenden DJs ohne Unternehmensform im Sinne des HGB.  
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 