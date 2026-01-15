import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { t } from '../utils/i18n';
import type { Education } from '../types';
import './Education.css';

const getYear = (period: string): number => {
  if (!period) return 0;
  const years = period.match(/\d{4}/g);
  if (!years || years.length === 0) return 0;
  // Берем последний год из периода (например, из "2023 - 2028" берем 2028)
  return parseInt(years[years.length - 1], 10);
};

export function Education() {
  const { data, language } = useLanguage();
  const sectionRef = useIntersectionObserver<HTMLElement>({
    selector: '.education-card',
  });

  const sortedEducation = useMemo(() => {
    return [...data.education].sort((a, b) => {
      const yearA = getYear(a.period);
      const yearB = getYear(b.period);
      return yearB - yearA; // Сортировка от нового к старому
    });
  }, [data.education]);

  return (
    <section ref={sectionRef} className="education-section">
      <div className="container">
        <h2 className="section-title">
          {t('education.title', language)}
        </h2>
        <div className="education-grid">
          {sortedEducation.map((edu) => (
            <EducationCard key={edu.id} education={edu} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EducationCard({ education }: { education: Education }) {
  const { language } = useLanguage();

  const handleClick = () => {
    if (education.url) {
      window.open(education.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div 
      className={`education-card ${education.url ? 'clickable' : ''}`}
      onClick={education.url ? handleClick : undefined}
      style={education.url ? { cursor: 'pointer' } : undefined}
    >
      <div className="education-icon">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2v-5" />
        </svg>
      </div>
      <h3 className="education-institution">{education.institution[language]}</h3>
      <p className="education-specialization">{education.specialization[language]}</p>
      <div className="education-meta">
        <span className="education-period">{education.period}</span>
        <span className="education-location">{education.location[language]}</span>
      </div>
    </div>
  );
}

