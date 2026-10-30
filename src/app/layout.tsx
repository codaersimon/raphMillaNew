import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.raphmilla.com'),
  alternates: { canonical: '/' },
  title: "Raph Milla – DJ & Producer | That One Girl out now",
  description: "House music nobody asked for (yet). Groovy, feel-good house from Hannover. Listen to the new single That One Girl, watch the sets, bookings: bookings@raphmilla.com",
  keywords: [
    "Raph Milla",
    "DJ",
    "Producer",
    "Electronic Music",
    "House Music",
    "Tech House",
    "Music Producer",
    "DJ Raph Milla",
    "That One Girl",
    "Hannover DJ",
    "Feel-Good House",
    "DJ Set"
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
    url: 'https://www.raphmilla.com',
    title: 'Raph Milla – DJ & Producer | That One Girl out now',
    description: 'House music nobody asked for (yet). Groovy, feel-good house from Hannover. Listen to the new single That One Girl, watch the sets, bookings: bookings@raphmilla.com',
    siteName: 'Raph Milla',
    images: [
      {
        url: 'https://www.raphmilla.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Raph Milla – DJ & Producer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raph Milla – DJ & Producer | That One Girl out now',
    description: 'House music nobody asked for (yet). Groovy, feel-good house from Hannover. Listen to the new single That One Girl, watch the sets, bookings: bookings@raphmilla.com',
    images: ['https://www.raphmilla.com/og-image.jpg'],
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
        
        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/ClashDisplay-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
        
        {/* Favicons - iOS Safari specific order */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* iOS Safari specific meta tags */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Raph Milla" />
        <meta name="theme-color" content="#0B0B08" />
        <meta name="msapplication-TileColor" content="#0B0B08" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Raph Milla",
              "alternateName": ["DJ Raph Milla"],
              "description": "DJ and producer of groovy, feel-good house music from Hannover",
              "url": "https://www.raphmilla.com",
              "sameAs": [
                "https://www.instagram.com/raphmillamusic/",
                "https://www.youtube.com/@raphMilla",
                "https://www.tiktok.com/@raphmilla",
                "https://soundcloud.com/raphmilla"
              ],
              "jobTitle": "DJ & Producer",
              "genre": ["House", "Tech House", "Electronic Music"],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Hannover",
                "addressCountry": "DE"
              },
              "email": "bookings@raphmilla.com",
              "knowsAbout": ["Music Production", "DJ Performance", "House Music"],
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
