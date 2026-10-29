import type { Metadata } from "next";
import styles from '../legal.module.css';
import { dmSans } from '../fonts';

export const metadata: Metadata = {
  title: "Datenschutz - Raph Milla",
  description: "Privacy policy and data protection information for Raph Milla",
  alternates: { canonical: '/datenschutz' },
};

export default function Datenschutz() {
  return (
    <>
      <div className={`${dmSans.variable} ${styles.page}`}>
        <div className={styles.container}>
          <h1 className={styles.title}>Datenschutzerklärung</h1>
          
          <div className={styles.content}>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              Diese Website verarbeitet keine personenbezogenen Daten aktiv. Es erfolgt keine Anmeldung, kein Newsletter-Versand und kein Tracking durch Analyse-Tools.
            </p>

            <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
            <h3>Vercel</h3>
            <p>
              Diese Website wird auf Servern von Vercel gehostet. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Datenschutz</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Maximilian Raphael Müller<br />
              E-Mail: bookings@raphmilla.com
            </p>
            <p>Wenn Sie mir per E-Mail schreiben, wird Ihre Anfrage inklusive aller übermittelten Daten gespeichert, um Ihre Anfrage zu beantworten. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>

            <h3>Einbindung von Drittinhalten (YouTube, Soundcloud, Instagram etc.)</h3>
            <p>Diese Website enthält Verlinkungen zu externen Plattformen (z. B. Instagram, YouTube, TikTok, Soundcloud, Twitch). Beim Klicken auf diese Links verlassen Sie diese Website und es gelten die Datenschutzrichtlinien der jeweiligen Plattformen.
            </p>

            <h3>SSL- bzw. TLS-Verschlüsselung</h3>
            <p>Diese Seite nutzt aus Sicherheitsgründen eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers mit „https://“ beginnt.
            </p>


            <h2>4. Datenerfassung auf dieser Website</h2>
            <h3>Server-Log-Dateien (Server-Logfiles)</h3>
            <p>
            Beim Besuch der Website erhebt der Hostinganbieter automatisch Informationen, die Ihr Browser übermittelt. Dazu gehören:<br />
              - Besuchte Seite<br />
              - Uhrzeit des Zugriffs<br />
              - Menge der gesendeten Daten<br />
              - Browsertyp und -version<br />
              - Betriebssystem<br />
              - Referrer URL<br />
              - IP-Adresse (anonymisiert, sofern möglich)<br />
              <br />
              Diese Daten dienen der technischen Sicherheit und werden nicht mit anderen Datenquellen zusammengeführt.</p>

            <h2>5. Änderungen dieser Datenschutzerklärung</h2>
            <p>Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
          </div>
        </div>
      </div>
    </>
  );
} 