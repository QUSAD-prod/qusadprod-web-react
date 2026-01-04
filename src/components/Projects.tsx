import { useState, useEffect, useMemo, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { t } from '../utils/i18n';
import type { Project } from '../types';
import './Projects.css';

import defaultIcon from '@/assets/projects/default.png';


// Утилита для извлечения года из периода
const getYear = (period?: string): number => {
  if (!period) return 0;
  const years = period.match(/\d{4}/g);
  if (!years || years.length === 0) return 0;
  return parseInt(years[years.length - 1], 10);
};

export function Projects() {
  const { data, language } = useLanguage();
  const sectionRef = useIntersectionObserver<HTMLElement>({
    selector: '.project-card',
  });
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  
  // Оптимизируем вычисления с помощью useMemo
  const { projectsByYear, sortedYears } = useMemo(() => {
    // Собираем все проекты из опыта работы
    const allProjects = data.workExperience.flatMap((exp) => exp.projects || []);

    // Группируем проекты по годам
    const grouped = allProjects.reduce((acc, project) => {
      const year = getYear(project.period);
      if (year === 0) {
        return acc;
      }
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(project);
      return acc;
    }, {} as Record<number, Project[]>);

    // Сортируем годы по убыванию (новые сначала)
    const sorted = Object.keys(grouped)
      .map(Number)
      .filter(year => year > 0)
      .sort((a, b) => b - a);

    return { projectsByYear: grouped, sortedYears: sorted };
  }, [data.workExperience]);

  const handleToggleProject = useCallback((projectId: string) => {
    const isExpanding = expandedProjectId !== projectId;
    setExpandedProjectId(prev => prev === projectId ? null : projectId);
    
    // Прокручиваем к карточке при раскрытии
    if (isExpanding) {
      // Используем requestAnimationFrame для ожидания обновления DOM
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const cardElement = document.querySelector(`[data-project-id="${projectId}"].expanded`);
          if (cardElement) {
            const rect = cardElement.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const headerHeight = 80; // Высота шапки
            const targetY = rect.top + scrollTop - headerHeight - 30; // Отступ сверху
            
            window.scrollTo({
              top: Math.max(0, targetY),
              behavior: 'smooth'
            });
          }
        });
      });
    }
  }, [expandedProjectId]);

  // Эффект для прокрутки к развернутой карточке
  useEffect(() => {
    if (expandedProjectId) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const cardElement = document.querySelector(`[data-project-id="${expandedProjectId}"].expanded`);
          if (cardElement) {
            const rect = cardElement.getBoundingClientRect();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const headerHeight = 80;
            const offset = 30;
            const targetY = rect.top + scrollTop - headerHeight - offset;

            window.scrollTo({
              top: Math.max(0, targetY),
              behavior: 'smooth'
            });
          }
        });
      });
    }
  }, [expandedProjectId]);

  const allProjectsCount = useMemo(() => {
    return data.workExperience.reduce((acc, exp) => acc + (exp.projects?.length || 0), 0);
  }, [data.workExperience]);

  if (allProjectsCount === 0) {
    return null;
  }

  return (
    <section ref={sectionRef} className="projects-section">
      <div className="container">
        <h2 className="section-title">
          {t('projects.title', language)}
        </h2>
        {sortedYears.map((year) => (
          <div key={year} className="projects-year-group">
            <h3 className="projects-year-title">{year}</h3>
            {expandedProjectId && projectsByYear[year].some(p => p.id === expandedProjectId) ? (
              <div className="projects-expanded-layout">
                <div className="projects-expanded-left">
                  {projectsByYear[year]
                    .filter(project => project.id === expandedProjectId)
                    .map((project) => {
                      const originalIndex = projectsByYear[year].findIndex(p => p.id === project.id);
                      return (
                        <ProjectCard 
                          key={project.id} 
                          project={project} 
                          isExpanded={true}
                          onToggle={() => handleToggleProject(project.id)}
                          data-order={originalIndex}
                        />
                      );
                    })}
                </div>
                <div className="projects-expanded-right">
                  {projectsByYear[year]
                    .filter(project => project.id !== expandedProjectId)
                    .map((project) => {
                      const originalIndex = projectsByYear[year].findIndex(p => p.id === project.id);
                      return (
                        <ProjectCard 
                          key={project.id} 
                          project={project} 
                          isExpanded={false}
                          onToggle={() => handleToggleProject(project.id)}
                          data-order={originalIndex}
                        />
                      );
                    })}
                </div>
              </div>
            ) : (
              <div className="projects-flex-container">
                {projectsByYear[year].map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    isExpanded={false}
                    onToggle={() => handleToggleProject(project.id)}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ 
  project, 
  isExpanded, 
  onToggle,
  'data-order': dataOrder
}: { 
  project: Project; 
  isExpanded: boolean; 
  onToggle: () => void;
  'data-order'?: number;
}) {
  const { language } = useLanguage();
  const [iconError, setIconError] = useState(false);
  const [defaultIconError, setDefaultIconError] = useState(false);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggle();
  };

  // Получаем инициалы из названия проекта для placeholder
  const getInitials = (title: string): string => {
    const words = title.split(' ');
    if (words.length >= 2) {
      return (words[0][0] + words[1][0]).toUpperCase();
    }
    return title.substring(0, 2).toUpperCase();
  };

  return (
    <div 
      data-project-id={project.id}
      className={`project-card visible ${isExpanded ? 'expanded' : ''}`}
      style={dataOrder !== undefined ? { '--card-order': dataOrder } as React.CSSProperties & { '--card-order': number } : undefined}
    >
      <div className="project-header" onClick={handleToggle}>
        <div className="project-header-content">
          <div className="project-icon-container">
            {project.icon && !iconError ? (
              <img 
                src={project.icon} 
                alt={project.title[language]} 
                className="project-icon"
                onError={() => setIconError(true)}
              />
            ) : !defaultIconError ? (
              <img 
                src={defaultIcon} 
                alt={project.title[language]} 
                className="project-icon"
                onError={() => setDefaultIconError(true)}
              />
            ) : (
              <div className="project-icon-placeholder">
                <span>{getInitials(project.title[language])}</span>
              </div>
            )}
          </div>
          <div className="project-text-content">
            <h3 className="project-title">{project.title[language]}</h3>
            <p className="project-description">{project.description[language]}</p>
          <div className="project-meta">
            {project.period && (
              <span className="project-period">{project.period}</span>
            )}
            {project.tags && project.tags.length > 0 && (
              <div className="project-tags">
                {project.tags.map((tag, index) => {
                  const tagText = tag[language];
                  const isFavorite = tagText === 'Любимый проект' || tagText === 'Favorite Project';
                  const isFirst = tagText === '# Первый Flutter проект' || tagText === 'Первый Flutter проект' || tagText === '# First Flutter Project' || tagText === 'First Flutter Project';
                  const isComplex = tagText === '# Самый сложный проект' || tagText === '# Most Complex Project';
                  const hasHash = tagText.startsWith('#');
                  
                  return (
                    <span 
                      key={index} 
                      className={`project-tag ${
                        isFavorite 
                          ? 'project-tag-favorite' 
                          : isFirst
                          ? 'project-tag-first'
                          : isComplex
                          ? 'project-tag-complex'
                          : ''
                      }`}
                    >
                      {isFavorite && (
                        <svg 
                          className="star-icon" 
                          width="12" 
                          height="12" 
                          viewBox="0 0 24 24" 
                          fill="currentColor"
                        >
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                      )}
                      {!isFavorite && hasHash && (
                        <>
                          <span className="hash-icon">#</span>
                          {' '}
                        </>
                      )}
                      {tagText.replace(/^#\s*/, '')}
                    </span>
                  );
                })}
              </div>
            )}
          </div>
          </div>
        </div>
        <button 
          className="expand-btn" 
          aria-label={isExpanded ? 'Collapse project' : 'Expand project'}
          onClick={handleToggle}
        >
          <span className={`arrow-icon ${isExpanded ? 'rotated' : ''}`}>▼</span>
        </button>
      </div>
      
      {isExpanded && (
        <div className="project-details">
          {project.detailedDescription ? (
            <p className="project-detailed-description">
              {project.detailedDescription[language]}
            </p>
          ) : (
            <p className="project-detailed-description">
              {project.description[language]}
            </p>
          )}
          {project.technicalChallenges && (
            <div className="project-technical-challenges">
              <h4>{t('projects.technical', language)}</h4>
              <p>{project.technicalChallenges[language]}</p>
            </div>
          )}
          {project.problemSolved && (
            <div className="project-problem-solved">
              <h4>{t('projects.impact', language)}</h4>
              <p>{project.problemSolved[language]}</p>
            </div>
          )}
          {project.technologies && project.technologies.length > 0 ? (
            <div className="project-technologies">
              <h4>{t('projects.technologies', language)}</h4>
              <div className="tech-tags">
                {project.technologies.map((tech: string, index: number) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ) : (
            <div className="project-technologies">
              <h4>{t('projects.technologies', language)}</h4>
              <div className="tech-tags">
                <span className="tech-tag">Flutter</span>
                <span className="tech-tag">Dart</span>
              </div>
            </div>
          )}
          {project.links && project.links.length > 0 && (
            <div className="project-links">
              <h4>{t('projects.links', language)}</h4>
              <div className="links-list">
                {project.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

