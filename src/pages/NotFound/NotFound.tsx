import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  useEffect(() => {
    document.title = '404 — Yismalem Awgichew';
  }, []);

  return (
    <main id="main" className={`${styles.main} route`}>
      <div className={styles.content}>
        <span className={styles.code}>404</span>
        <p className={styles.message}>This page does not exist.</p>
        <Link to="/" className={styles.link}>← Return to Work</Link>
      </div>
    </main>
  );
}
