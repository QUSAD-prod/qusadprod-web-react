import { useLanguage } from '../context/LanguageContext';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import './Advantages.css';

interface Advantage {
  id: string;
  icon: string;
  title: Record<'ru' | 'en', string>;
  description: Record<'ru' | 'en', string>;
}

const advantages: Advantage[] = [
  {
    id: 'reliability',
    icon: '✓',
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
    icon: '◉',
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
    icon: '⚡',
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

export function Advantages() {
  const { language } = useLanguage();
  const sectionRef = useIntersectionObserver<HTMLElement>({
    selector: '.advantage-card',
  });

  return (
    <section ref={sectionRef} className="advantages-section">
      <div className="container">
        <h2 className="advantages-title">
          {language === 'ru' ? 'Отличия' : 'Distinctions'}
        </h2>
        <div className="advantages-grid">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.id}
              className="advantage-card"
              style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
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
    </section>
  );
}
