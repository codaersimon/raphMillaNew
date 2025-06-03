'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import styles from './page.module.css';

// Client-only time component to prevent hydration errors
const TimeDisplay = dynamic(() => Promise.resolve(function TimeDisplay() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hamburgTime = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Berlin',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      }).format(now);
      setCurrentTime(`HAMBURG, ${hamburgTime}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return <>{currentTime}</>;
}), { ssr: false });

// Custom hook for responsive design
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

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
        <a href="https://www.instagram.com/raphmillaa/" className={styles.socialLeft}>@raphmillaa</a>
        <h1 className={styles.pageTitle}>PRODUCER // DJ</h1>
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
        
        {/* Middle row: Page title and social links */}
        <div className={styles.mobileMiddleRow}>
          <h1 className={styles.mobilePageTitle}>PRODUCER // DJ</h1>
          <div className={styles.mobileSocials}>
            <a href="https://www.instagram.com/raphmillaa/" className={styles.mobileSocialLink}>@raphmillaa</a>
            <a href="https://www.twitch.tv/millagoeslive" className={styles.mobileSocialLink}>@millagoeslive</a>
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
          
          {/* Row 2: Instagram left, YouTube right */}
          <div className={styles.footerRow2}>
            <div className={styles.footerInstagram}>
              <p className={styles.socialLinkHeader}>INSTAGRAM</p>
              <a href="https://www.instagram.com/raphmillaa/" className={styles.socialLink}>@raphmilla</a>
            </div>
            <div className={styles.footerYoutube}>
              <p className={styles.socialLinkHeader}>YOUTUBE</p>
              <a href="https://www.youtube.com/@raphMilla" className={styles.socialLink}>@raphmilla</a>
            </div>
          </div>
          
          {/* Row 3: Mail left, Local Time right */}
          <div className={styles.footerRow3}>
            <div className={styles.footerMail}>
              <p className={styles.socialLinkHeader}>MAIL</p>
              <p><a href="mailto:bookings@raphmilla.com" className={styles.socialLink}>bookings@raphmilla.com</a></p>
            </div>
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
        {/* TWITCH (centered) */}
        <div className={styles.mobileFooterRow}>
          <p className={styles.mobileSocialLinkHeader}>TWITCH</p>
          <a href="https://www.twitch.tv/millagoeslive" className={styles.mobileSocialLink}>@millagoeslive</a>
        </div>
        
        {/* INSTAGRAM | YOUTUBE (side by side) */}
        <div className={styles.mobileFooterRowDouble}>
          <div className={styles.mobileFooterCol}>
            <p className={styles.mobileSocialLinkHeader}>INSTAGRAM</p>
            <a href="https://www.instagram.com/raphmillaa/" className={styles.mobileSocialLink}>@raphmillaa</a>
          </div>
          <div className={styles.mobileFooterCol}>
            <p className={styles.mobileSocialLinkHeader}>YOUTUBE</p>
            <a href="https://www.youtube.com/@raphMilla" className={styles.mobileSocialLink}>@raphmilla</a>
          </div>
        </div>
        
        {/* MAIL (centered) */}
        <div className={styles.mobileFooterRow}>
          <p className={styles.mobileSocialLinkHeader}>MAIL</p>
          <a href="mailto:bookings@raphmilla.com" className={styles.mobileSocialLink}>bookings@raphmilla.com</a>
        </div>
        
        {/* LOCAL TIME (centered) */}
        <div className={styles.mobileFooterRow}>
          <p className={styles.mobileSocialLinkHeader}>LOCAL TIME</p>
          <p className={styles.mobileTimeDisplay}><TimeDisplay /></p>
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
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        {isMobile ? <MobileHero /> : <DesktopHero />}
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
        {isMobile ? <MobileFooter /> : <DesktopFooter />}
      </section>
    </div>
  );
}
