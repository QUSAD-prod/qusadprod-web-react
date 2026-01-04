import type { Language } from '../types';

type Translations = Record<Language, string>;

const translations: Record<string, Translations> = {
  'about.title': { ru: 'Обо мне', en: 'About me' },
  'about.card.title': { ru: 'О себе', en: 'About' },
  'about.age': { ru: 'лет', en: 'y.o.' },
  'about.experience': { ru: 'лет опыта', en: 'years of experience' },
  'projects.title': { ru: 'Проекты', en: 'Projects' },
  'projects.technical': { ru: 'Технические решения:', en: 'Technical Solutions:' },
  'projects.impact': { ru: 'Влияние проекта:', en: 'Project Impact:' },
  'projects.technologies': { ru: 'Технологии:', en: 'Technologies:' },
  'projects.links': { ru: 'Ссылки:', en: 'Links:' },
  'experience.title': { ru: 'Опыт работы', en: 'Work Experience' },
  'experience.responsibilities': { ru: 'Обязанности:', en: 'Responsibilities:' },
  'experience.tech': { ru: 'Технологии:', en: 'Tech Stack:' },
  'education.title': { ru: 'Образование', en: 'Education' },
  'hero.scroll': { ru: 'Прокрутите', en: 'Scroll' },
};

export function t(key: string, language: Language): string {
  return translations[key]?.[language] || key;
}

