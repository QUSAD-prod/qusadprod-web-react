import { useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { t } from '../utils/i18n';
import type { WorkExperience } from '../types';
import './Experience.css';

const getStartDate = (period: string): number => {
  if (!period) return 0;
  // Извлекаем дату начала из периода (например, "04.2025 - настоящее время" -> 202504)
  const match = period.match(/(\d{2})\.(\d{4})/);
  if (match) {
    const month = parseInt(match[1], 10);
    const year = parseInt(match[2], 10);
    return year * 100 + month; // Формат: YYYYMM для правильной сортировки
  }
  // Если формат другой, пытаемся извлечь год
  const years = period.match(/\d{4}/g);
  if (years && years.length > 0) {
    return parseInt(years[0], 10) * 100; // Берем первый год, месяц = 0
  }
  return 0;
};

export function Experience() {
  const { data, language } = useLanguage();

  const sortedExperience = useMemo(() => {
    return [...data.workExperience].sort((a, b) => {
      const dateA = getStartDate(a.period);
      const dateB = getStartDate(b.period);
      return dateB - dateA; // Сортировка от нового к старому (более новая дата начала выше)
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

