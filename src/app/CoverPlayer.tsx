'use client';

import { useEffect, useRef, useState, type KeyboardEvent, type PointerEvent } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const formatTime = (s: number) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;

// Cover with a play button and a seekable progress bar for a short self-hosted preview clip.
// The audio file only loads on first play.
export default function CoverPlayer({ cover, title, preview }: { cover: string; title: string; preview?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [started, setStarted] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setTime(audio.currentTime);
    const onMeta = () => setDuration(audio.duration || 0);
    const onEnd = () => {
      setPlaying(false);
      audio.currentTime = 0;
    };
    const onPause = () => setPlaying(false);
    const onPlay = () => {
      setPlaying(true);
      setStarted(true);
    };
    audio.addEventListener('timeupdate', onTime);
    audio.addEventListener('loadedmetadata', onMeta);
    audio.addEventListener('ended', onEnd);
    audio.addEventListener('pause', onPause);
    audio.addEventListener('play', onPlay);
    return () => {
      audio.removeEventListener('timeupdate', onTime);
      audio.removeEventListener('loadedmetadata', onMeta);
      audio.removeEventListener('ended', onEnd);
      audio.removeEventListener('pause', onPause);
      audio.removeEventListener('play', onPlay);
    };
  }, []);

  function toggle() {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) audio.play().catch(() => setPlaying(false));
    else audio.pause();
  }

  function seekTo(seconds: number) {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    audio.currentTime = Math.min(Math.max(seconds, 0), duration - 0.1);
    setTime(audio.currentTime);
  }

  function seekFromPointer(e: PointerEvent<HTMLDivElement>) {
    const rect = barRef.current?.getBoundingClientRect();
    if (!rect) return;
    seekTo(((e.clientX - rect.left) / rect.width) * duration);
  }

  function onBarKey(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'ArrowRight') seekTo(time + 5);
    else if (e.key === 'ArrowLeft') seekTo(time - 5);
    else if (e.key === 'Home') seekTo(0);
    else return;
    e.preventDefault();
  }

  const progress = duration ? time / duration : 0;

  return (
    <div className={styles.coverWrap}>
      <Image src={cover} alt={`${title} cover`} width={800} height={800} className={styles.cover} priority />
      {preview && (
        <>
          <audio ref={audioRef} src={preview} preload="none" />
          <button
            type="button"
            className={styles.coverPlay}
            onClick={toggle}
            aria-label={playing ? `Pause ${title} preview` : `Play ${title} preview`}
          >
            {playing ? (
              <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor" /></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
            )}
          </button>
          {started && (
            <>
              <span className={styles.coverTime} aria-hidden="true">
                {formatTime(time)} / {formatTime(duration)}
              </span>
              <div
                ref={barRef}
                className={styles.seekBar}
                role="slider"
                tabIndex={0}
                aria-label={`${title} preview position`}
                aria-valuemin={0}
                aria-valuemax={Math.round(duration)}
                aria-valuenow={Math.round(time)}
                aria-valuetext={formatTime(time)}
                onPointerDown={(e) => {
                  e.currentTarget.setPointerCapture(e.pointerId);
                  seekFromPointer(e);
                }}
                onPointerMove={(e) => {
                  if (e.currentTarget.hasPointerCapture(e.pointerId)) seekFromPointer(e);
                }}
                onKeyDown={onBarKey}
              >
                <span className={styles.seekTrack} />
                <span className={styles.seekFill} style={{ transform: `scaleX(${progress})` }} />
                <span className={styles.seekKnob} style={{ left: `${progress * 100}%` }} />
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
