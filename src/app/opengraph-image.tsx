import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

// Link preview for WhatsApp, Instagram, iMessage etc. Brand-only on purpose, so it never goes out of date.
// Release pages set their own cover as preview image.
export const alt = 'Raph Milla – DJ & Producer, Hannover';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpengraphImage() {
  const [clash, logo] = await Promise.all([
    readFile(join(process.cwd(), 'public/fonts/ClashDisplay-Bold.otf')),
    readFile(join(process.cwd(), 'public/logo-gold.svg'), 'utf8'),
  ]);
  const logoSrc = `data:image/svg+xml;base64,${Buffer.from(logo).toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 96px',
          background: '#0B0B08',
          fontFamily: 'Clash',
          color: '#F2EEE3',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <img src={logoSrc} width={516} height={80} alt="" />
          <div style={{ marginTop: 36, fontSize: 26, letterSpacing: 6, color: '#9A968A' }}>DJ &amp; PRODUCER · HANNOVER</div>
          <div style={{ marginTop: 56, fontSize: 52, lineHeight: 1.05, textTransform: 'uppercase', display: 'flex', flexDirection: 'column' }}>
            <span>House music</span>
            <span>nobody asked for</span>
            <span style={{ color: '#E6B23B' }}>(yet)</span>
          </div>
          <div style={{ marginTop: 44, fontSize: 24, letterSpacing: 3, color: '#E6B23B' }}>RAPHMILLA.COM</div>
        </div>

        {/* The glowing sphere from the brand artwork */}
        <div
          style={{
            width: 300,
            height: 300,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 300,
            background: 'radial-gradient(circle, rgba(240,82,122,0.45) 0%, rgba(240,82,122,0.12) 45%, rgba(11,11,8,0) 70%)',
          }}
        >
          <div
            style={{
              width: 92,
              height: 92,
              borderRadius: 92,
              background: 'radial-gradient(circle at 40% 38%, #FFC2D4 0%, #FD8EAF 35%, #F0527A 100%)',
              boxShadow: '0 0 60px 18px rgba(240,82,122,0.55)',
            }}
          />
        </div>
      </div>
    ),
    { ...size, fonts: [{ name: 'Clash', data: clash, weight: 700, style: 'normal' }] },
  );
}
