import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Hero.css';

export function Hero() {
  const { data, language } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Анимация появления контента при загрузке
    if (contentRef.current) {
      requestAnimationFrame(() => {
        contentRef.current?.classList.add('animate-in');
      });
    }
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div ref={contentRef} className="hero-content">
        <div className="hero-text">
          <h1 className="hero-nickname">{data.personalInfo.nickname}</h1>
          <p className="hero-position">{data.personalInfo.position[language]}</p>
        </div>
        <div 
          className="scroll-indicator"
          onClick={() => {
            const nextSection = document.querySelector('.about-section, .projects-section');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              const nextSection = document.querySelector('.about-section, .projects-section');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
          }}
        >
          <div className="scroll-arrows">
            <div className="scroll-arrow scroll-arrow-secondary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <div className="scroll-arrow scroll-arrow-middle">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
            <div className="scroll-arrow scroll-arrow-primary">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

