import { Link } from 'react-router-dom';
import ArchImage from '../ArchImage/ArchImage';
import type { Project } from '../../data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
  aspect?: string;
  priority?: boolean;
}

export const pad = (n: number) => String(n).padStart(2, '0');

export default function ProjectCard({ project, aspect, priority = false }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link to={`/work/${project.slug}`} className={styles.link}>
        <div className={styles.media}>
          <ArchImage src={project.thumbImage ?? project.coverImage} alt={project.coverAlt} aspect={aspect} priority={priority} className={styles.image} />
        </div>
        <div className={styles.meta}>
          <span className={styles.num}>{pad(project.number)}</span>
          <div>
            <h3 className={styles.title}><span className="u-line">{project.title}</span></h3>
            <p className={styles.detail}>{project.categoryLabel}</p>
          </div>
          <span className={styles.year}>{project.year}</span>
        </div>
      </Link>
    </article>
  );
}
