import { useLanguage } from '../context/LanguageContext';
import './Contacts.css';

export function Contacts() {
  const { data } = useLanguage();

  return (
    <div className="contacts-fixed">
      <a
        href={`mailto:${data.personalInfo.email}`}
        className="contact-link email"
        aria-label="Email"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
        <span>{data.personalInfo.email}</span>
      </a>
      <a
        href={`https://t.me/${data.personalInfo.telegram.replace('@', '')}`}
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link telegram"
        aria-label="Telegram"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.169 1.858-.896 6.728-.896 6.728-.896 6.728-1.277 5.66-1.277 5.66s-.17 1.156-1.277 1.156c-1.106 0-4.773-1.785-6.5-2.625-.896-.42-1.277-1.156-1.277-1.156s-.17-.42.17-.84c.34-.42 1.277-1.156 1.277-1.156s8.5-5.66 8.5-5.66c.34-.42.68-.42.68-.42s.17 0 .17.42c0 .42-.17.42-.17.42z" />
        </svg>
        <span>{data.personalInfo.telegram}</span>
      </a>
    </div>
  );
}

