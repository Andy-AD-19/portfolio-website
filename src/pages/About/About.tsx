import { useEffect } from 'react';
import styles from './About.module.css';

interface EntryProps {
  period: string;
  title: string;
  institution: string;
  location: string;
  description?: string;
}

function Entry({ period, title, institution, location, description }: EntryProps) {
  return (
    <div className={styles.entry}>
      <div className={styles.entryPeriod}>{period}</div>
      <div className={styles.entryBody}>
        <h3 className={styles.entryTitle}>{title}</h3>
        <p className={styles.entryInst}>{institution}</p>
        <p className={styles.entryLoc}>{location}</p>
        {description && <p className={styles.entryDesc}>{description}</p>}
      </div>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    document.title = 'About — Yismalem Awgichew';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'About Yismalem Awgichew, architect based in Addis Ababa. Education, internship experience, and professional skills.');
  }, []);

  return (
    <main id="main" className={`${styles.main} route`}>
      <div className={styles.container}>

        {/* Page header */}
        <header className={styles.pageHeader}>
          <span className={styles.label}>About</span>
          <h1 className={styles.name}>Yismalem Awgichew</h1>
          <p className={styles.title}>Addis Ababa, Ethiopia</p>
        </header>

        <div className={styles.body}>

          {/* Intro paragraph */}
          <div className={styles.introBlock}>
            <p className={styles.introPara}>
              Currently completing a Bachelor of Science in Architecture
              at Addis Ababa Science and Technology University. Work spans architectural
              design, 3D modeling, technical drafting, visualization, interior design, and
              computational form exploration.
            </p>
            <p className={styles.introPara}>
              Previous internship experience includes professional practice at Cornerstone
              Consulting Architects & Engineers and the Federal Ministry of Health Ethiopia,
              contributing to healthcare, residential, and public infrastructure projects.
            </p>
          </div>

          {/* Education */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Education</h2>
            <div className={styles.entries}>
              <Entry
                period="2021 – 2026"
                title="B.Sc. Architecture"
                institution="Addis Ababa Science & Technology University"
                location="Addis Ababa, Ethiopia"
              />
            </div>
          </section>

          {/* Experience */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Experience</h2>
            <div className={styles.entries}>
              <Entry
                period="2025"
                title="Architectural Intern"
                institution="Cornerstone Consulting Architects & Engineers"
                location="Addis Ababa, Ethiopia"
                description="3D modeling, exterior architectural design, technical drafting, elevations, and interior design across healthcare and residential projects."
              />
              <Entry
                period="2024 – 2025"
                title="Intern — Health Infrastructure"
                institution="Federal Ministry of Health Ethiopia"
                location="Addis Ababa, Ethiopia"
                description="Interior design of the Health Infrastructure Lead Executive Office: spatial planning, furniture layout, zone organization, and presentation material."
              />
            </div>
          </section>

          {/* Skills */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Skills</h2>
            <div className={styles.skillsGrid}>
              <div className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>Practice</h3>
                <ul className={styles.skillList}>
                  {[
                    'Architectural Design',
                    '3D Modeling',
                    'Technical Drafting',
                    'Visualization & Rendering',
                    'Interior Design',
                    'Parametric / Computational Design',
                  ].map((s) => (
                    <li key={s} className={styles.skillItem}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.skillGroup}>
                <h3 className={styles.skillGroupTitle}>Software</h3>
                <ul className={styles.skillList}>
                  {[
                    'AutoCAD',
                    'Revit',
                    'SketchUp',
                    'Rhino 3D',
                    'Lumion',
                    'Adobe Creative Suite',
                  ].map((s) => (
                    <li key={s} className={styles.skillItem}>{s}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className={styles.section}>
            <h2 className={styles.sectionHeading}>Contact</h2>
            <div className={styles.contactLinks}>
              <a href="mailto:yismalemad@gmail.com" className={styles.contactLink}>
                yismalemad@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/yismalem-awgichew-4802372a5/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                LinkedIn ↗
              </a>
              <a
                href="/yismalem-awgichew-portfolio.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.contactLink} ${styles.pdfLink}`}
              >
                Download PDF Portfolio ↗
              </a>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
