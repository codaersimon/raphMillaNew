import type { Metadata } from "next";
import styles from './impressum.module.css';

export const metadata: Metadata = {
  title: "Impressum - Raph Milla",
  description: "Legal notice and contact information for Raph Milla",
};

export default function Impressum() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet" />
      
      <div className={styles.page}>
        <div className={styles.container}>
          <h1 className={styles.title}>Impressum</h1>
          
          <div className={styles.content}>
            <h2>Angaben gemäß § 5 TMG</h2>
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

            <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
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