import { useEffect, useRef, type RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  selector?: string;
  onIntersect?: (element: Element) => void;
  delay?: number;
}

export function useIntersectionObserver<T extends HTMLElement = HTMLElement>(
  options: UseIntersectionObserverOptions = {}
): RefObject<T | null> {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    selector,
    onIntersect,
    delay = 0,
  } = options;

  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = selector
              ? entry.target.querySelectorAll(`${selector}:not(.visible)`)
              : [entry.target];

            target.forEach((card, index) => {
              requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                  if (delay > 0) {
                    setTimeout(() => {
                      if (onIntersect) {
                        onIntersect(card);
                      } else {
                        card.classList.add('visible');
                      }
                    }, index * delay);
                  } else {
                    if (onIntersect) {
                      onIntersect(card);
                    } else {
                      card.classList.add('visible');
                    }
                  }
                });
              });
            });
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, selector, onIntersect, delay]);

  return ref;
}

