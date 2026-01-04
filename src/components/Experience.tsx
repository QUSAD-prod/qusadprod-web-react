import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { t } from '../utils/i18n';
import type { WorkExperience } from '../types';
import './Experience.css';

const getYear = (period: string): number => {
  if (!period) return 0;
  const years = period.match(/\d{4}/g);
  if (!years || years.length === 0) return 0;
  // Берем последний год из периода (например, из "2021-2023" берем 2023)
  return parseInt(years[years.length - 1], 10);
};

export function Experience() {
  const { data, language } = useLanguage();

  const sortedExperience = useMemo(() => {
    return [...data.workExperience].sort((a, b) => {
      const yearA = getYear(a.period);
      const yearB = getYear(b.period);
      return yearB - yearA; // Сортировка от нового к старому
    });
  }, [data.workExperience]);

  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">
          {t('experience.title', language)}
        </h2>
        <div className="experience-timeline">
          {sortedExperience.map((exp, index) => (
            <ExperienceCard key={exp.id} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({ experience, index }: { experience: WorkExperience; index: number }) {
  const { language } = useLanguage();
  const cardRef = useIntersectionObserver<HTMLDivElement>({
    threshold: 0.1,
    rootMargin: '150px',
  });

  return (
    <div 
      ref={cardRef}
      className={`experience-card ${index % 2 === 0 ? 'left' : 'right'}`}
    >
      <div className="experience-content">
        <div className="experience-header">
          <h3 className="experience-position">{experience.position[language]}</h3>
          <h4 className="experience-company">{experience.company[language]}</h4>
          <span className="experience-period">{experience.period}</span>
        </div>
        <p className="experience-description">{experience.description[language]}</p>
        
        {experience.responsibilities && experience.responsibilities[language] && (
          <div className="experience-responsibilities">
            <h5>{t('experience.responsibilities', language)}</h5>
            <ul>
              {experience.responsibilities[language].map((resp, idx) => (
                <li key={idx}>{resp}</li>
              ))}
            </ul>
          </div>
        )}
        
        {experience.techStack && experience.techStack.length > 0 && (
          <div className="experience-tech">
            <h5>{t('experience.tech', language)}</h5>
            <div className="tech-stack">
              {experience.techStack.map((tech, idx) => (
                <span key={idx} className="tech-item">{tech}</span>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="timeline-dot"></div>
    </div>
  );
}

