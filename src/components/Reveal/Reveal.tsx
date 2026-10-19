import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react';

const observer =
  typeof window !== 'undefined' && 'IntersectionObserver' in window
    ? new IntersectionObserver(
        (entries) =>
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add('is-in');
              observer?.unobserve(e.target);
            }
          }),
        { rootMargin: '0px 0px -8% 0px' },
      )
    : null;

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
}

/** Fades content up once it enters the viewport. Disabled under reduced motion via CSS. */
export default function Reveal({ children, className = '', delay = 0, style }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!observer) { el.classList.add('is-in'); return; }
    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={{ ...style, ['--delay' as string]: `${delay}ms` }}>
      {children}
    </div>
  );
}
