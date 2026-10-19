import { useEffect } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact — Yismalem Awgichew';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Contact Yismalem Awgichew. Available for architectural modeling, drafting, visualization, and design opportunities.');
  }, []);

  return (
    <main id="main" className={`${styles.main} route`}>
      <div className={styles.container}>

        <header className={styles.pageHeader}>
          <span className={styles.label}>Contact</span>
          <h1 className={styles.heading}>Get in Touch</h1>
        </header>

        <div className={styles.body}>
          <p className={styles.intro}>
            Available for architectural modeling, drafting, visualization,
            and design opportunities.
          </p>

          <div className={styles.primaryContact}>
            <a href="mailto:yismalemad@gmail.com" className={styles.emailLink}>
              yismalemad@gmail.com
            </a>
          </div>

          <div className={styles.secondaryLinks}>
            <a
              href="https://www.linkedin.com/in/yismalem-awgichew-4802372a5/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              LinkedIn ↗
            </a>
            <a
              href="/yismalem-awgichew-portfolio.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondaryLink}
            >
              PDF Portfolio ↗
            </a>
          </div>

          <p className={styles.location}>Based in Addis Ababa, Ethiopia</p>
        </div>

      </div>
    </main>
  );
}
