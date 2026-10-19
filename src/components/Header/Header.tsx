import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { PDF_URL, EMAIL } from '../../data/site';
import styles from './Header.module.css';

const links = [
  { to: '/', label: 'Work', end: true },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  // Hide on scroll down, reveal on scroll up
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      setHidden(y > 240 && y > last);
      last = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''} ${hidden && !open ? styles.hidden : ''}`}>
        <div className={styles.inner}>
          <NavLink to="/" className={styles.brand} aria-label="Yismalem Awgichew — home">
            <span>Yismalem Awgichew</span>
          </NavLink>

          <nav aria-label="Main" className={styles.desktopNav}>
            <ul className={styles.navList}>
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink to={l.to} end={l.end} className={({ isActive }) => `${styles.link} u-line ${isActive ? 'is-active' : ''}`}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className={`${styles.link} u-line`}>
                  PDF Portfolio ↗
                </a>
              </li>
            </ul>
          </nav>

          <button
            className={styles.toggle}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`${styles.menu} ${open ? styles.menuOpen : ''}`} aria-hidden={!open}>
        <nav aria-label="Mobile">
          <ul className={styles.menuList}>
            {links.map((l, i) => (
              <li key={l.to} style={{ ['--i' as string]: i }}>
                <NavLink to={l.to} end={l.end} className={styles.menuLink} tabIndex={open ? 0 : -1}>
                  <span className={styles.menuNum}>0{i + 1}</span>{l.label}
                </NavLink>
              </li>
            ))}
            <li style={{ ['--i' as string]: 3 }}>
              <a href={PDF_URL} target="_blank" rel="noopener noreferrer" className={styles.menuLink} tabIndex={open ? 0 : -1}>
                <span className={styles.menuNum}>04</span>PDF ↗
              </a>
            </li>
          </ul>
          <div className={styles.menuMeta}>
            <a href={`mailto:${EMAIL}`} tabIndex={open ? 0 : -1}>{EMAIL}</a>
          </div>
        </nav>
      </div>
    </>
  );
}
