import { Link } from 'react-router-dom';
import { EMAIL, LINKEDIN, PDF_URL } from '../../data/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.kicker}>Open to architectural modeling, drafting and design work.</p>
        <a href={`mailto:${EMAIL}`} className={styles.email}>
          {EMAIL}<span aria-hidden="true"> ↗</span>
        </a>

        <div className={styles.cols}>
          <div>
            <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" className="u-line">LinkedIn ↗</a>
            <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className="u-line">PDF Portfolio ↗</a>
          </div>
          <div>
            <p className={styles.head}>Pages</p>
            <Link to="/" className="u-line">Work</Link>
            <Link to="/about" className="u-line">About</Link>
            <Link to="/contact" className="u-line">Contact</Link>
          </div>
          <div className={styles.end}>
            <p className={styles.head}>© {new Date().getFullYear()}</p>
            <p>Yismalem Awgichew</p>
            <button className="u-line" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Back to top ↑</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
