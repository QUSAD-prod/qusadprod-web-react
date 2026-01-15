import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useMemo } from 'react';
import './Skills.css';

// Основные технологии из опыта работы
const mainTechnologies = [
  'Dart/Flutter', 'React', 'TypeScript', 'JavaScript',
  'Firebase', 'REST API', 'Git', 'Python', 'HTML/CSS',
  'C/C++', 'C#', 'Java', 'Swift', 'Kotlin'
];

export function Skills() {
  const { language } = useLanguage();
  const sectionRef = useIntersectionObserver<HTMLElement>({
    selector: '.skill-item',
  });

  const sortedSkills = useMemo(() => {
    return [...mainTechnologies].sort();
  }, []);

  return (
    <section ref={sectionRef} className="skills-section">
      <div className="container">
        <div className="skills-header">
          <h2 className="skills-title">
            {language === 'ru' ? 'Что я использую' : 'What I Use'}
          </h2>
        </div>
        <div className="skills-grid">
          {sortedSkills.map((skill, index) => (
            <div
              key={skill}
              className="skill-item"
              style={{ '--delay': `${index * 0.05}s` } as React.CSSProperties}
            >
              <div className="skill-icon">
                {skill.charAt(0)}
              </div>
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
