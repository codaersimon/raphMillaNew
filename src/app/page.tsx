import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';
import TimeDisplay from './TimeDisplay';

// Desktop Hero Component
function DesktopHero() {
  return (
    <div className={styles.heroContainer}>
      {/* Top row */}
      <div className={styles.topRow}>
        <Image 
          src="/LOGO.svg" 
          alt="Raph Milla"
          width={155}
          height={24}
          className={styles.logo}
          priority
        />
        <p><a href="mailto:bookings@raphmilla.com" className={styles.bookings}>BOOKINGS</a></p>
        <div className={styles.location}><TimeDisplay /></div>
      </div>
      
      {/* Middle row */}
      <div className={styles.middleRow}>
        <a href="https://www.instagram.com/raphmillamusic/" className={styles.socialLeft}>@raphmillamusic</a>
        <h1 className={styles.pageTitle}>PRODUCER <span className={styles.redSlash}>{'//'}</span> DJ</h1>
        <a href="https://www.twitch.tv/millagoeslive" className={styles.socialRight}>@millagoeslive</a>
      </div>
      
      {/* Bottom row */}
      <div className={styles.bottomRow}>
        <Image 
          src="/raph-logo.svg" 
          alt="Raph Milla DJ Producer"
          width={600}
          height={150}
          className={styles.raphLogo}
          priority
        />
      </div>
    </div>
  );
}

// Mobile Hero Component (placeholder for now)
function MobileHero() {
  return (
    <div className={styles.mobileHeroContainer}>
      <div className={styles.mobileHeroContent}>
        {/* Top row: Milla logo */}
        <div className={styles.mobileTopRow}>
          <Image 
            src="/raph-logo.svg" 
            alt="Raph Milla DJ Producer"
            width={600}
            height={150}
            className={styles.mobileMillaLogo}
            priority
          />
        </div>
        
        {/* Middle row: Page title, tagline and social links */}
        <div className={styles.mobileMiddleRow}>
          <h1 className={styles.mobilePageTitle}>PRODUCER <span className={styles.redSlash}>{'//'}</span> DJ</h1>
          <p className={styles.mobileTagline}>LISTEN <span className={styles.redSlash}>{'//'}</span> WATCH <span className={styles.redSlash}>{'//'}</span> CONNECT</p>
          <div className={styles.mobileHeroSocialIcons}>
            <a href="https://www.youtube.com/@raphMilla" className={styles.heroSocialIcon} aria-label="YouTube">
              <Image 
                src="/ICONyoutube.svg" 
                alt="YouTube"
                width={36}
                height={36}
                className={styles.heroSocialIconImg}
              />
            </a>
            <a href="https://www.tiktok.com/@raphmilla" className={styles.heroSocialIcon} aria-label="TikTok">
              <Image 
                src="/ICONtiktok.svg" 
                alt="TikTok"
                width={36}
                height={36}
                className={styles.heroSocialIconImg}
              />
            </a>
            <a href="https://www.instagram.com/raphmillamusic/" className={styles.heroSocialIcon} aria-label="Instagram">
              <Image 
                src="/ICONinstagram.svg" 
                alt="Instagram"
                width={36}
                height={36}
                className={styles.heroSocialIconImg}
              />
            </a>
          </div>
        </div>
        
        {/* Bottom row: Raph logo */}
        <div className={styles.mobileBottomRow}>
          <Image 
            src="/milla-logo.svg" 
            alt="Raph Milla"
            width={600}
            height={150}
            className={styles.mobileRaphLogo}
            priority
          />
        </div>
      </div>
    </div>
  );
}

// Desktop Footer Component
function DesktopFooter() {
  return (
    <div className={styles.footerContainer}>
      {/* Split container: empty left, all content right */}
      <div className={styles.footerSplit}>
        <div className={styles.footerEmptyLeft}></div>
        <div className={styles.footerContentRight}>
          {/* Row 1: Twitch alone */}
          <div className={styles.footerRow1}>
            <div className={styles.footerTwitch}>
              <p className={styles.socialLinkHeader}>TWITCH</p>
              <a href="https://www.twitch.tv/millagoeslive" className={styles.socialLink}>@millagoeslive</a>
            </div>
          </div>
          
          {/* Row 2: Instagram left, TikTok center, YouTube right */}
          <div className={styles.footerRow2}>
            <div className={styles.footerInstagram}>
              <p className={styles.socialLinkHeader}>INSTAGRAM</p>
              <a href="https://www.instagram.com/raphmillamusic/" className={styles.socialLink}>@raphmillamusic</a>
            </div>
            <div className={styles.footerTiktok}>
              <p className={styles.socialLinkHeader}>TIKTOK</p>
              <a href="https://www.tiktok.com/@raphmilla" className={styles.socialLink}>@raphmilla</a>
            </div>
            <div className={styles.footerYoutube}>
              <p className={styles.socialLinkHeader}>YOUTUBE</p>
              <a href="https://www.youtube.com/@raphMilla" className={styles.socialLink}>@raphmilla</a>
            </div>
          </div>
          
          {/* Row 3: Mail left, empty center, Local Time right */}
          <div className={styles.footerRow3}>
            <div className={styles.footerMail}>
              <p className={styles.socialLinkHeader}>CONTACT</p>
              <p><a href="mailto:bookings@raphmilla.com" className={styles.socialLink}>bookings@raphmilla.com</a></p>
            </div>
            <div></div>
            <div className={styles.footerLocalTime}>
              <p className={styles.socialLinkHeader}>LOCAL TIME</p>
              <p className={styles.timedisplay}><TimeDisplay /></p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom row */}
      <div className={styles.footerBottomRow}>
        <Image 
          src="/milla-logo.svg" 
          alt="Raph Milla"
          width={155}
          height={24}
          className={styles.millaLogo}
        />
      </div>
    </div>
  );
}

// Mobile Footer Component
function MobileFooter() {
  return (
    <div className={styles.mobileFooterContainer}>
      <div className={styles.mobileFooterContent}>
        {/* CONTACT (formerly MAIL) */}
        <div className={styles.mobileFooterRow}>
          <p className={styles.mobileSocialLinkHeader}>CONTACT</p>
          <a href="mailto:bookings@raphmilla.com" className={styles.mobileSocialLink}>bookings@raphmilla.com</a>
        </div>
        
        {/* LOCAL TIME */}
        <div className={styles.mobileFooterRow}>
          <p className={styles.mobileSocialLinkHeader}>LOCAL TIME</p>
          <p className={styles.mobileTimeDisplay}><TimeDisplay /></p>
        </div>
        
        {/* Social Icons Row */}
        <div className={styles.mobileFooterSocialIcons}>
          <a href="https://www.youtube.com/@raphMilla" className={styles.socialIcon} aria-label="YouTube">
            <Image 
              src="/ICONyoutube.svg" 
              alt="YouTube"
              width={40}
              height={40}
              className={styles.socialIconImg}
            />
          </a>
          <a href="https://www.tiktok.com/@raphmilla" className={styles.socialIcon} aria-label="TikTok">
            <Image 
              src="/ICONtiktok.svg" 
              alt="TikTok"
              width={40}
              height={40}
              className={styles.socialIconImg}
            />
          </a>
          <a href="https://www.instagram.com/raphmillamusic/" className={styles.socialIcon} aria-label="Instagram">
            <Image 
              src="/ICONinstagram.svg" 
              alt="Instagram"
              width={40}
              height={40}
              className={styles.socialIconImg}
            />
          </a>
          <a href="https://www.twitch.tv/millagoeslive" className={styles.socialIcon} aria-label="Twitch">
            <Image 
              src="/ICONtwitch.svg" 
              alt="Twitch"
              width={40}
              height={40}
              className={styles.socialIconImg}
            />
          </a>
          <a href="https://soundcloud.com/raphmilla" className={styles.socialIcon} aria-label="SoundCloud">
            <Image 
              src="/ICONsoundcloud.svg" 
              alt="SoundCloud"
              width={40}
              height={40}
              className={styles.socialIconImg}
            />
          </a>
        </div>
        
        {/* Logo at bottom */}
        <div className={styles.mobileFooterLogo}>
          <Image 
            src="/LOGO.svg" 
            alt="Raph Milla"
            width={155}
            height={24}
            className={styles.mobileFooterLogoImg}
          />
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  // Both variants are rendered; CSS shows the right one, so there is no layout flip after hydration
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.mobileOnly}><MobileHero /></div>
        <div className={styles.desktopOnly}><DesktopHero /></div>
      </section>

      <section className={styles.livestream}>
        <div className={styles.livestreamContainer}>
          {/* Background image overlay */}
          <div className={styles.livestreamBackground}></div>
          
          {/* Content overlay */}
          <div className={styles.livestreamContent}>
            <div className={styles.schedule}>
              <p className={styles.scheduleItem}>LIVE IM STREAM <br />MONTAG // 20 UHR <br />FREITAG // 22 UHR</p>
            </div>
            <a 
              href="https://www.twitch.tv/millagoeslive" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.watchLiveButton}
            >
              WATCH LIVE
            </a>
          </div>
        </div>
      </section>

      <section className={styles.footer}>
        <div className={styles.mobileOnly}><MobileFooter /></div>
        <div className={styles.desktopOnly}><DesktopFooter /></div>
      </section>

      {/* Legal Links */}
      <div className={styles.legalLinks}>
        <Link href="/impressum" className={styles.legalLink}>
          Impressum
        </Link>
        <Link href="/datenschutz" className={styles.legalLink}>
          Datenschutz
        </Link>
      </div>
    </div>
  );
}
