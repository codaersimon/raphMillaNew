import type { Metadata } from "next";
import styles from '../legal.module.css';
import { dmSans } from '../fonts';
import LegalLangSwitch from '../LegalLangSwitch';

export const metadata: Metadata = {
  title: "Privacy Policy - Raph Milla",
  description: "Privacy policy and data protection information for Raph Milla",
  alternates: { canonical: '/privacy', languages: { de: '/datenschutz', en: '/privacy' } },
};

// English version of /datenschutz. Keep both in sync; the German version prevails in case of doubt.
export default function Privacy() {
  return (
    <>
      <div className={`${dmSans.variable} ${styles.page}`}>
        <div className={styles.container}>
          <LegalLangSwitch current="en" de="/datenschutz" en="/privacy" />
          <h1 className={styles.title} lang="en">Privacy Policy</h1>

          <div className={styles.content} lang="en">
            <h2>1. Privacy at a glance</h2>
            <h3>General information</h3>
            <p>
              The following notes give a simple overview of what happens to your personal data when you visit this website. Personal data is any data that can be used to identify you personally.
            </p>

            <h3>Data collection on this website</h3>
            <p>
              This website does not use cookies or any analytics or tracking tools. Personal data is only processed if you sign up for the newsletter (“Get notified”), actively start an embedded video, or send me an email. Fonts and images are loaded directly from this website, not from third parties.
            </p>

            <h2>2. Hosting</h2>
            <h3>Vercel</h3>
            <p>
              This website is hosted on servers provided by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel is certified under the EU-US Data Privacy Framework. Hosting is based on my legitimate interest in delivering this website securely and quickly (Art. 6(1)(f) GDPR).
            </p>

            <h2>3. General information and mandatory details</h2>
            <h3>Controller</h3>
            <p>
              The party responsible for data processing on this website is:<br /><br />
              Maximilian Raphael Müller<br />
              Rietberg 8<br />
              29396 Schönewörde<br />
              Germany<br />
              Email: bookings@raphmilla.com
            </p>
            <p>If you contact me by email, your message and all data you provide will be stored in order to answer your request. This data will not be shared without your consent.
            </p>

            <h3>Your rights</h3>
            <p>
              You have the right at any time to access your stored personal data, its origin and the purpose of processing, as well as the right to rectification, erasure, restriction of processing and data portability. You can withdraw any consent you have given at any time with effect for the future. You also have the right to lodge a complaint with a data protection supervisory authority. For any request, simply email bookings@raphmilla.com.
            </p>

            <h3>Links to external platforms</h3>
            <p>This website contains links to external platforms (e.g. Instagram, TikTok, YouTube, SoundCloud, Spotify, Apple Music, Amazon Music, Mixcloud, Bandcamp and DistroKid). You only leave this website when you click a link; the privacy policy of the respective platform then applies.
            </p>

            <h3>SSL/TLS encryption</h3>
            <p>For security reasons, this website uses SSL/TLS encryption. You can recognise an encrypted connection by the address bar of your browser starting with “https://”.
            </p>


            <h2>4. Data collection on this website</h2>
            <h3>Server log files</h3>
            <p>
            When you visit the website, the hosting provider automatically collects information that your browser transmits. This includes:<br />
              - Page visited<br />
              - Time of access<br />
              - Amount of data sent<br />
              - Browser type and version<br />
              - Operating system<br />
              - Referrer URL<br />
              - IP address (anonymised where possible)<br />
              <br />
              This data is used for technical security and is not combined with other data sources.</p>

            <h3>Newsletter (“Get notified”) via Brevo</h3>
            <p>
              If you sign up via the “Get notified” form, I will inform you by email about new music and releases. Emails are sent using Brevo, a service of Sendinblue SAS (Brevo), 106 boulevard Haussmann, 75008 Paris, France. Your data is stored on servers in the EU.
            </p>
            <p>
              Your email address and the time and IP address of your sign-up and confirmation are processed. A connection to Brevo is only established when you submit the form. Sign-up uses a double opt-in process: you receive an email with a confirmation link and are only added to the list after clicking it. This prevents anyone from signing up with someone else’s email address.
            </p>
            <p>
              The legal basis is your consent (Art. 6(1)(a) GDPR). You can unsubscribe at any time via the link in every email or by emailing bookings@raphmilla.com. After unsubscribing, your email address is removed from the mailing list; it may be kept on a blocklist so that you receive no further emails. A data processing agreement with Brevo is in place (Art. 28 GDPR). More information: <a href="https://www.brevo.com/legal/privacypolicy/" target="_blank" rel="noopener noreferrer">brevo.com/legal/privacypolicy</a>.
            </p>

            <h3>Embedded YouTube videos</h3>
            <p>
              A DJ set from YouTube can be played on this website. The provider is Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland. The video only loads after you click “Play”. Before that, no connection to YouTube is made; only a preview image loaded directly from this website is shown.
            </p>
            <p>
              After you click, the video is loaded in privacy-enhanced mode (youtube-nocookie.com). Among other things, your IP address and information about your browser are transmitted to Google; a transfer to the USA is possible. Google is certified under the EU-US Data Privacy Framework. The legal basis is your consent given by clicking “Play” (Art. 6(1)(a) GDPR, Section 25(1) TDDDG). More information: <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a>.
            </p>

            <h2>5. Changes to this privacy policy</h2>
            <p>I reserve the right to amend this privacy policy so that it always complies with current legal requirements. This is a translation of the German privacy policy (<a href="/datenschutz">Datenschutzerklärung</a>); in case of doubt, the German version prevails.
            </p>
            <p>Last updated: October 2026</p>
          </div>
        </div>
      </div>
    </>
  );
}
