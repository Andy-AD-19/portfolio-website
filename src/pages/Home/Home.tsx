import { useEffect, useState } from 'react';
import ProjectCard, { pad } from '../../components/ProjectCard/ProjectCard';
import Reveal from '../../components/Reveal/Reveal';
import { projects } from '../../data/projects';
import type { ProjectCategory } from '../../data/projects';
import styles from './Home.module.css';

type Filter = 'all' | ProjectCategory;

const filters: { key: Filter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'educational', label: 'Educational' },
  { key: 'professional', label: 'Professional' },
  { key: 'personal', label: 'Personal' },
];

const count = (f: Filter) => (f === 'all' ? projects.length : projects.filter((p) => p.category === f).length);

export default function Home() {
  const [filter, setFilter] = useState<Filter>('all');
  const list = filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  useEffect(() => {
    document.title = 'Yismalem Awgichew — Architecture Portfolio';
    document.querySelector('meta[name="description"]')?.setAttribute(
      'content',
      'Architecture portfolio of Yismalem Awgichew, based in Addis Ababa, Ethiopia. Architectural design, 3D modeling, visualization, interior design, and computational form.',
    );
  }, []);

  return (
    <main id="main" className={`${styles.main} route`}>
      <section className={styles.hero} aria-label="Introduction">
        <h1 className={styles.name}>
          <span className={styles.line}><span style={{ animationDelay: '80ms' }}>Yismalem</span></span>
          <span className={styles.line}><span style={{ animationDelay: '180ms' }}>Awgichew</span></span>
        </h1>
        <div className={styles.introGrid}>
          <p className={styles.introText}>A selection of academic, professional and personal work.</p>
        </div>
      </section>

      <section id="work" className={styles.work} aria-labelledby="work-heading">
        <div className={styles.toolbar}>
          <h2 id="work-heading" className={styles.workHeading}>Selected Work <sup>{pad(projects.length)}</sup></h2>
          <div className={styles.filters} role="group" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f.key}
                className={`${styles.filter} ${filter === f.key ? styles.filterOn : ''}`}
                aria-pressed={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}<sup>{count(f.key)}</sup>
              </button>
            ))}
          </div>
        </div>

        
          <div className={styles.grid} key={filter}>
            {[0, 1].map((col) => (
              <div key={col} className={styles.col}>
                {list.map((p, i) => i % 2 === col && (
                  <Reveal key={p.id} delay={col * 120}>
                    <ProjectCard project={p} priority={i < 2} />
                  </Reveal>
                ))}
              </div>
            ))}
          </div>
      </section>
    </main>
  );
}
