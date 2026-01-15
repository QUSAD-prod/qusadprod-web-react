import { useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { t } from '../utils/i18n';
import './About.css';

interface Advantage {
  id: string;
  icon: React.ReactNode;
  title: Record<'ru' | 'en', string>;
  description: Record<'ru' | 'en', string>;
}

const advantages: Advantage[] = [
  {
    id: 'reliability',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    title: {
      ru: 'Надежность',
      en: 'Reliability',
    },
    description: {
      ru: 'Соблюдаю сроки, ответственно подхожу к каждому проекту. Гарантирую качественный код и стабильную работу приложений.',
      en: 'I meet deadlines and approach each project responsibly. I guarantee quality code and stable application performance.',
    },
  },
  {
    id: 'transparency',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: {
      ru: 'Прозрачность',
      en: 'Transparency',
    },
    description: {
      ru: 'Все этапы разработки видны от идеи до релиза. Чистый код, понятная архитектура и полная отчетность по проекту.',
      en: 'All development stages are visible from idea to release. Clean code, clear architecture, and full project reporting.',
    },
  },
  {
    id: 'product-focus',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: {
      ru: 'Фокус на продукт',
      en: 'Product Focus',
    },
    description: {
      ru: 'Приоритет на UX, производительность и масштабируемость. Создаю решения, которые приносят реальную пользу пользователям.',
      en: 'Priority on UX, performance, and scalability. I create solutions that bring real value to users.',
    },
  },
];

// Функция для вычисления возраста от даты рождения
function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

// Функция для вычисления лет опыта от даты начала работы
function calculateExperience(startDate: string): number {
  const start = new Date(startDate);
  const today = new Date();
  let years = today.getFullYear() - start.getFullYear();
  const monthDiff = today.getMonth() - start.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < start.getDate())) {
    years--;
  }
  
  return years;
}

// Функция для правильного склонения "лет/года/год" в русском языке
function getAgeWord(age: number, language: 'ru' | 'en'): string {
  if (language === 'en') {
    return age === 1 ? 'year' : 'years';
  }
  
  // Русский язык
  const lastDigit = age % 10;
  const lastTwoDigits = age % 100;
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'лет';
  }
  
  if (lastDigit === 1) {
    return 'год';
  }
  
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'года';
  }
  
  return 'лет';
}

// Функция для правильного склонения "лет опыта" в русском языке
function getExperienceWord(years: number, language: 'ru' | 'en'): string {
  if (language === 'en') {
    return years === 1 ? 'year of experience' : 'years of experience';
  }
  
  // Русский язык
  const lastDigit = years % 10;
  const lastTwoDigits = years % 100;
  
  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'лет опыта';
  }
  
  if (lastDigit === 1) {
    return 'год опыта';
  }
  
  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'года опыта';
  }
  
  return 'лет опыта';
}

export function About() {
  const { data, language } = useLanguage();
  const sectionRef = useIntersectionObserver<HTMLElement>({ threshold: 0.1, rootMargin: '50px' });
  
  // Вычисляем возраст от даты рождения 06.02.2006
  const age = useMemo(() => calculateAge('2006-02-06'), []);
  
  // Вычисляем годы опыта от даты начала работы 01.06.2021
  const experienceYears = useMemo(() => calculateExperience('2021-06-01'), []);

  useEffect(() => {
    if (sectionRef.current) {
      const cards = sectionRef.current.querySelectorAll('.about-personal-card, .about-summary-card, .advantage-card');
      cards.forEach((card, index) => {
        requestAnimationFrame(() => {
          setTimeout(() => {
            card.classList.add('visible');
          }, index * 100);
        });
      });
    }
  }, [sectionRef]);

  return (
    <section ref={sectionRef} className="about-section">
      <div className="container">
        <h2 className="about-title">{t('about.title', language)}</h2>
        <div className="about-content">
          <div className="about-left">
            <div className="about-personal-card">
              <div className="about-avatar-container">
                {data.personalInfo.avatar ? (
                  <img
                    src={data.personalInfo.avatar}
                    alt={data.personalInfo.fullName[language]}
                    className="about-avatar"
                  />
                ) : (
                  <div className="about-avatar-placeholder">
                    <span>{data.personalInfo.fullName[language].split(' ').map(n => n[0]).join('')}</span>
                  </div>
                )}
              </div>
              <div className="about-personal-info">
                <h3 className="about-name">{data.personalInfo.fullName[language]}</h3>
                <p className="about-position">{data.personalInfo.position[language]}</p>
                <p className="about-meta">
                  {age} {getAgeWord(age, language)} | {experienceYears} {getExperienceWord(experienceYears, language)}
                </p>
                {data.personalInfo.country && data.personalInfo.city && (
                  <p className="about-meta">
                    {data.personalInfo.city[language]}, {data.personalInfo.country[language]}
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="about-right">
            {data.personalInfo.summary && (
              <div className="about-summary-card">
                <h3 className="about-card-title">{t('about.card.title', language)}</h3>
                <p className="about-summary-text">{data.personalInfo.summary[language]}</p>
              </div>
            )}
          </div>
        </div>
        
        <div className="about-advantages">
          <div className="advantages-grid">
            {advantages.map((advantage) => (
              <div
                key={advantage.id}
                className="advantage-card"
              >
                <div className="advantage-icon">
                  {advantage.icon}
                </div>
                <h3 className="advantage-title">{advantage.title[language]}</h3>
                <p className="advantage-description">{advantage.description[language]}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

