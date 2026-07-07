'use client';

import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const getTimezone = () => {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const abbr = new Date()
      .toLocaleTimeString('en-US', { timeZoneName: 'short' })
      .split(' ')
      .pop();
    return abbr ?? tz;
  } catch {
    return 'UTC';
  }
};

export const LiveClock = () => {
  const [time, setTime] = useState<string | null>(null);
  const [day, setDay] = useState<string>('');
  const [tz, setTz] = useState<string>('');

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setDay(now.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase());
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
      setTz(getTimezone());
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <span className={styles.clock} aria-label="Current local time">
      <span className={styles.clockDay}>{day}</span>
      <span className={styles.clockTime}>{time}</span>
      <span className={styles.clockTz}>{tz}</span>
    </span>
  );
};
