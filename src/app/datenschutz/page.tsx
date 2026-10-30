import type { Metadata } from "next";
import styles from '../legal.module.css';
import { dmSans } from '../fonts';
import LegalLangSwitch from '../LegalLangSwitch';

export const metadata: Metadata = {
  title: "Datenschutz - Raph Milla",
  description: "Privacy policy and data protection information for Raph Milla",
  alternates: { canonical: '/datenschutz', languages: { de: '/datenschutz', en: '/privacy' } },
};

export default function Datenschutz() {
  return (
    <>
      <div className={`${dmSans.variable} ${styles.page}`}>
        <div className={styles.container}>
          <LegalLangSwitch current="de" de="/datenschutz" en="/privacy" />
          <h1 className={styles.title}>Datenschutzerklärung</h1>

          <div className={styles.content}>
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>

            <h3>Datenerfassung auf dieser Website</h3>
            <p>
              Diese Website verwendet keine Cookies und keine Analyse- oder Tracking-Tools. Personenbezogene Daten werden nur verarbeitet, wenn Sie sich für den Newsletter anmelden („Get notified“), ein eingebettetes Video aktiv starten oder mir eine E-Mail schreiben. Schriften und Bilder werden direkt von dieser Website geladen, nicht von Drittanbietern.
            </p>

            <h2>2. Hosting</h2>
            <h3>Vercel</h3>
            <p>
              Diese Website wird auf Servern von Vercel gehostet. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel ist nach dem EU-US Data Privacy Framework zertifiziert. Die Nutzung erfolgt auf Grundlage meines berechtigten Interesses an einer sicheren und schnellen Bereitstellung dieser Website (Art. 6 Abs. 1 lit. f DSGVO).
            </p>

            <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <h3>Verantwortliche Stelle</h3>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
              Maximilian Raphael Müller<br />
              Rietberg 8<br />
              29396 Schönewörde<br />
              Deutschland<br />
              E-Mail: bookings@raphmilla.com
            </p>
            <p>Wenn Sie mir per E-Mail schreiben, wird Ihre Anfrage inklusive aller übermittelten Daten gespeichert, um Ihre Anfrage zu beantworten. Diese Daten werden nicht ohne Ihre Einwilligung weitergegeben.
            </p>

            <h3>Ihre Rechte</h3>
            <p>
              Sie haben jederzeit das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und den Zweck der Verarbeitung sowie ein Recht auf Berichtigung, Löschung, Einschränkung der Verarbeitung und Datenübertragbarkeit. Eine erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen. Außerdem steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Für alle Anliegen genügt eine E-Mail an bookings@raphmilla.com.
            </p>

            <h3>Links zu externen Plattformen</h3>
            <p>Diese Website enthält Links zu externen Plattformen (z. B. Instagram, TikTok, YouTube, SoundCloud, Spotify, Apple Music, Amazon Music, Mixcloud, Bandcamp und DistroKid). Erst beim Klicken auf einen Link verlassen Sie diese Website; dann gelten die Datenschutzrichtlinien der jeweiligen Plattform.
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

            <h3>Newsletter („Get notified“) über Brevo</h3>
            <p>
              Wenn Sie sich über das Formular „Get notified“ anmelden, informiere ich Sie per E-Mail über neue Musik und Releases. Für den Versand nutze ich Brevo, einen Dienst der Sendinblue SAS (Brevo), 106 boulevard Haussmann, 75008 Paris, Frankreich. Ihre Daten werden auf Servern in der EU gespeichert.
            </p>
            <p>
              Verarbeitet werden Ihre E-Mail-Adresse sowie Zeitpunkt und IP-Adresse der Anmeldung und der Bestätigung. Erst wenn Sie das Formular absenden, wird eine Verbindung zu Brevo hergestellt. Die Anmeldung erfolgt im Double-Opt-in-Verfahren: Sie erhalten eine E-Mail mit einem Bestätigungslink und werden erst nach dem Klick darauf in die Liste aufgenommen. So kann sich niemand mit fremden E-Mail-Adressen anmelden.
            </p>
            <p>
              Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Sie können sich jederzeit über den Abmeldelink in jeder E-Mail oder per E-Mail an bookings@raphmilla.com abmelden. Nach der Abmeldung wird Ihre E-Mail-Adresse aus der Verteilerliste gelöscht; sie kann in einer Sperrliste gespeichert bleiben, damit Sie keine weiteren E-Mails erhalten. Mit Brevo besteht ein Vertrag zur Auftragsverarbeitung (Art. 28 DSGVO). Weitere Informationen: <a href="https://www.brevo.com/de/legal/privacypolicy/" target="_blank" rel="noopener noreferrer">brevo.com/de/legal/privacypolicy</a>.
            </p>

            <h3>Eingebettete YouTube-Videos</h3>
            <p>
              Auf dieser Website kann ein DJ-Set von YouTube abgespielt werden. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland. Das Video wird erst geladen, wenn Sie auf „Play“ klicken. Vorher wird keine Verbindung zu YouTube hergestellt; angezeigt wird nur ein Vorschaubild, das direkt von dieser Website geladen wird.
            </p>
            <p>
              Nach dem Klick wird das Video im erweiterten Datenschutzmodus (youtube-nocookie.com) geladen. Dabei werden unter anderem Ihre IP-Adresse und Informationen über Ihren Browser an Google übermittelt; eine Übertragung in die USA ist möglich. Google ist nach dem EU-US Data Privacy Framework zertifiziert. Rechtsgrundlage ist Ihre Einwilligung durch den Klick auf „Play“ (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG). Weitere Informationen: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </p>

            <h2>5. Änderungen dieser Datenschutzerklärung</h2>
            <p>Ich behalte mir vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht.
            </p>
            <p>Stand: Oktober 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
