'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

// Brevo form endpoint (list "Raph Milla Fans", double opt-in). Nothing from Brevo loads until someone submits.
const BREVO_FORM_URL =
  'https://987e5b6f.sibforms.com/serve/MUIFAN9pG_rEv8yrHt6__BmBWxjwGJZrYutkQsADyWOlvTqck-8Wxcr6J6ExnshDL0P0R0nd18IW3nmx-NDXKusGToxBYSVoRbzAQNrp3rVZcZ6WZjxmWktxz7BnND0Q9N2mSMWMlDVrREm-2l51UeGx0L5bU2rCFj5PtWhsa5LrtmYfwAFikOMNzvI72YniDYQp99HNgWiHBmhjjQ==';

// Brevo answers "success" even for malformed addresses, so validate here first.
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

type Status = 'idle' | 'sending' | 'done' | 'invalid' | 'error';

export default function GetNotified() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!EMAIL_PATTERN.test(email.trim())) {
      setStatus('invalid');
      return;
    }
    setStatus('sending');
    const body = new FormData();
    body.append('EMAIL', email.trim());
    body.append('email_address_check', '');
    body.append('locale', 'en');
    try {
      const res = await fetch(BREVO_FORM_URL, { method: 'POST', body });
      const data = await res.json();
      setStatus(data?.success ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <section className={styles.notify} aria-live="polite">
        <p className={styles.notifyTitle}>You&apos;re almost in</p>
        <p className={styles.notifyText}>Check your inbox and confirm your email.</p>
      </section>
    );
  }

  return (
    <section className={styles.notify} aria-labelledby="notify-title">
      <h2 id="notify-title" className={styles.notifyTitle}>Get notified</h2>
      <p className={styles.notifyText}>Be the first to hear when new music drops.</p>
      <form className={styles.notifyForm} onSubmit={onSubmit} noValidate>
        <label htmlFor="notify-email" className={styles.srOnly}>Email address</label>
        <input
          id="notify-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === 'invalid' || status === 'error') setStatus('idle');
          }}
          className={styles.notifyInput}
          aria-invalid={status === 'invalid'}
          aria-describedby="notify-msg"
        />
        <button type="submit" className={styles.notifyButton} disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Notify me'}
        </button>
      </form>
      <p id="notify-msg" className={styles.notifyFine} aria-live="polite">
        {status === 'invalid' && <span className={styles.notifyError}>Please enter a valid email address.</span>}
        {status === 'error' && <span className={styles.notifyError}>Something went wrong. Please try again.</span>}
        {(status === 'idle' || status === 'sending') && (
          <>No spam, unsubscribe anytime. <Link href="/privacy">Privacy</Link></>
        )}
      </p>
    </section>
  );
}
