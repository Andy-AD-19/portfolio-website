import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ArchImage from '../../components/ArchImage/ArchImage';
import Reveal from '../../components/Reveal/Reveal';
import { pad } from '../../components/ProjectCard/ProjectCard';
import { getProjectBySlug, projects } from '../../data/projects';
import type { Project } from '../../data/projects';
import styles from './ProjectPage.module.css';

const spanClass: Record<string, string> = {
  full: styles.full,
  half: styles.half,
  'two-thirds': styles.twoThirds,
  'one-third': styles.oneThird,
};

function ProjectView({ project }: { project: Project }) {

  useEffect(() => {
    document.title = `${project.title} — Yismalem Awgichew`;
    document.querySelector('meta[name="description"]')?.setAttribute('content', project.description.slice(0, 155));
  }, [project]);

  const meta = [
    ['Type', project.categoryLabel],
    ['Year', project.year],
    ['Location', project.location],
    ['Role', project.role],
  ].filter(([, v]) => v);

  return (
    <main id="main" className={`${styles.main} route`}>
      <header className={styles.head}>
        <div className={styles.crumbs}>
          <Link to="/" className="u-line">Work</Link>
          <span aria-hidden="true">/</span>
          <span>{pad(project.number)} of {pad(projects.length)}</span>
        </div>
        <h1 className={styles.title}>{project.title}</h1>
        <p className={styles.subtitle}>{project.subtitle}</p>
        <dl className={styles.meta}>
          {meta.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className={styles.hero}>
        <ArchImage src={project.coverImage} alt={project.coverAlt} priority className={`${styles.heroImg} ${project.coverFit === 'contain' ? styles.heroContain : ''}`} />
      </div>

      <section className={styles.text} aria-label="Overview">
        <p className={styles.label}>Overview</p>
        <div className={styles.textBody}>
          <Reveal><p className={styles.lede}>{project.description}</p></Reveal>
          {project.conceptText && (
            <Reveal delay={100}>
              <p className={styles.labelInline}>Concept</p>
              <p className={styles.body}>{project.conceptText}</p>
            </Reveal>
          )}
        </div>
      </section>

      {project.sections?.map((section, si) => (
        <section key={si} className={styles.section}>
          {(section.heading || section.body) && (
            <div className={styles.text}>
              <p className={styles.label}>{pad(si + 1)}{section.heading && <> — {section.heading}</>}</p>
              {section.body && (
                <Reveal className={styles.textBody}><p className={styles.body}>{section.body}</p></Reveal>
              )}
            </div>
          )}
          {section.images && (
            <div className={styles.gallery}>
              {section.images.map((img) => (
                <Reveal key={img.src} className={`${styles.figure} ${spanClass[img.span ?? 'full']}`}>
                  <figure>
                    <ArchImage src={img.src} alt={img.alt} />
                    {img.caption && <figcaption>{img.caption}</figcaption>}
                  </figure>
                </Reveal>
              ))}
            </div>
          )}
        </section>
      ))}
    </main>
  );
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;
  if (!project) return <Navigate to="/" replace />;
  return <ProjectView key={project.slug} project={project} />;
}
