'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import YouTubeEmbed from './YouTubeEmbed';
import type { DjSet } from './releases';

// One video on top, a list of sets below; picking a set swaps the video and its links.
export default function SetPlayer({ sets }: { sets: DjSet[] }) {
  const [index, setIndex] = useState(0);
  const current = sets[index];

  return (
    <>
      {/* key resets the embed to its thumbnail when switching sets */}
      <YouTubeEmbed key={current.youtubeId} id={current.youtubeId} title={current.title} thumbnail={current.thumbnail} />

      <div className={styles.setLinks}>
        <a href={`https://www.youtube.com/watch?v=${current.youtubeId}`} target="_blank" rel="noopener noreferrer">
          <Image src="/icons/youtube.svg" alt="" width={16} height={16} /> Watch on YouTube ↗
        </a>
        {current.mixcloud && (
          <a href={current.mixcloud} target="_blank" rel="noopener noreferrer">
            <Image src="/icons/mixcloud.svg" alt="" width={22} height={22} /> Listen on Mixcloud ↗
          </a>
        )}
      </div>

      {sets.length > 1 && (
        <ul className={styles.setList}>
          {sets.map((s, i) => (
            <li key={s.youtubeId}>
              <button
                type="button"
                className={styles.setItem}
                aria-pressed={i === index}
                onClick={() => setIndex(i)}
              >
                <span className={styles.setItemDot} aria-hidden="true" />
                <span className={styles.rowLabel}>{s.title}</span>
                <span className={styles.rowIndex}>{s.minutes} min</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
