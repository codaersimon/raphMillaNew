import { DM_Sans } from 'next/font/google';

// Self-hosted at build time by next/font, so visitors never contact Google
export const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
});
