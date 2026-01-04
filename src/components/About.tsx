import { useEffect, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { t } from '../utils/i18n';
import './About.css';

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
      const cards = sectionRef.current.querySelectorAll('.about-personal-card, .about-summary-card');
      cards.forEach((card) => {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.classList.add('visible');
          });
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
      </div>
    </section>
  );
}

