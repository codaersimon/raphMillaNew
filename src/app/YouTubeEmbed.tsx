'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

// Click-to-load: YouTube is only contacted after the visitor presses play (privacy).
export default function YouTubeEmbed({ id, title, thumbnail }: { id: string; title: string; thumbnail: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className={styles.video}>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <button type="button" className={styles.video} onClick={() => setActive(true)} aria-label={`Play ${title}`}>
      <Image src={thumbnail} alt="" fill sizes="(max-width: 720px) 100vw, 640px" className={styles.videoThumb} />
      <span className={styles.playButton} aria-hidden="true">
        <svg viewBox="0 0 24 24" width="28" height="28"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
      </span>
      <span className={styles.videoNotice}>Plays via YouTube</span>
    </button>
  );
}
