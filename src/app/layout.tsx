import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raph Milla - Producer // DJ | Live Stream Schedule",
  description: "Electronic music producer and DJ from Germany. Live streams every Monday 8 PM & Friday 10 PM on Twitch @millagoeslive. Bookings: bookings@raphmilla.com",
  keywords: [
    "Raph Milla",
    "DJ",
    "Producer",
    "Electronic Music",
    "Live Stream",
    "Twitch",
    "Music Producer",
    "DJ Raph Milla",
    "Milla Goes Live",
    "Hamburg DJ",
    "Electronic Dance Music",
    "Live DJ Set"
  ],
  authors: [{ name: "Raph Milla" }],
  creator: "Raph Milla",
  publisher: "Raph Milla",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raphmilla.com',
    title: 'Raph Milla - Producer // DJ | Live Stream Schedule',
    description: 'Raph Milla is a Producer and DJ featuring live streams every Monday 8 PM and Friday 10 PM. Watch live on Twitch @millagoeslive.',
    siteName: 'Raph Milla',
    images: [
      {
        url: 'https://raphmilla.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raph Milla - Producer // DJ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raph Milla - Producer // DJ | Live Stream Schedule',
    description: 'Producer and DJ featuring live streams every Monday 8 PM and Friday 10 PM. Watch live on Twitch @millagoeslive.',
    images: ['https://raphmilla.com/og-image.jpg'],
  },
  verification: {
    google: '6pztL3hD2VBYLvkMNe_INmhEhyBINNmmnh97E3F6gOA', // You'll need to add this from Google Search Console
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical images with responsive loading */}
        <link rel="preload" href="/bg.jpg" as="image" type="image/jpeg" media="(min-width: 769px)" />
        <link rel="preload" href="/bg-mobile.jpg" as="image" type="image/jpeg" media="(max-width: 768px)" />
        <link rel="preload" href="/maxi 1.jpg" as="image" type="image/jpeg" media="(min-width: 769px)" />
        <link rel="preload" href="/maxiMobile.jpg" as="image" type="image/jpeg" media="(max-width: 768px)" />
        
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/ClashDisplay-Bold.otf" as="font" type="font/otf" crossOrigin="" />
        <link rel="preload" href="/fonts/Neuropolitical Rg.otf" as="font" type="font/otf" crossOrigin="" />
        
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0a0a0a" />
        <link rel="canonical" href="https://raphmilla.com" />
        
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Raph Milla",
              "alternateName": ["Milla Goes Live", "DJ Raph Milla"],
              "description": "Producer and DJ featuring live streams every Monday 8 PM and Friday 10 PM",
              "url": "https://raphmilla.com",
              "sameAs": [
                "https://www.instagram.com/raphmillamusic/",
                "https://www.twitch.tv/millagoeslive",
                "https://www.youtube.com/@raphMilla"
              ],
              "jobTitle": "Producer // DJ",
              "genre": ["Electronic Music", "DJ Set", "Live Stream"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hamburg",
                "addressCountry": "DE"
              },
              "email": "bookings@raphmilla.com",
              "knowsAbout": ["Music Production", "DJ Performance", "Live Streaming", "Electronic Music"],
              "performer": {
                "@type": "MusicGroup",
                "name": "Raph Milla"
              }
            })
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
