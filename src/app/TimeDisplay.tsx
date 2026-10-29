'use client';

import { useState, useEffect } from 'react';

// Client-only: starts empty on the server to prevent hydration errors
export default function TimeDisplay() {
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

    // Only minutes are shown, so tick once at the next full minute, then every minute
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      updateTime();
      interval = setInterval(updateTime, 60_000);
    }, 60_000 - (Date.now() % 60_000));

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  return <>{currentTime}</>;
}
