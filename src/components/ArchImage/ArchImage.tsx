import { useState } from 'react';
import styles from './ArchImage.module.css';

interface ArchImageProps {
  src: string;
  alt: string;
  /** Fixed aspect ratio (cropped with object-fit: cover). Omit to keep the image's natural proportions. */
  aspect?: string;
  className?: string;
  priority?: boolean;
}

export default function ArchImage({ src, alt, aspect, className, priority = false }: ArchImageProps) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const fixed = Boolean(aspect);

  return (
    <div
      className={`${styles.wrapper} ${fixed ? styles.fixed : ''} ${loaded ? styles.loaded : ''} ${className ?? ''}`}
      style={fixed ? { aspectRatio: aspect } : undefined}
    >
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className={styles.img}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={alt}>
          <span className={styles.placeholderText}>{alt}</span>
        </div>
      )}
    </div>
  );
}
