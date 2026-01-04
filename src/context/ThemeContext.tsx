import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('theme') as Theme;
    return saved === 'dark' || saved === 'light' ? saved : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    
    // Принудительно обновляем theme-color для мобильных устройств
    const themeColor = theme === 'dark' ? '#000000' : '#ffffff';
    const statusBarStyle = theme === 'dark' ? 'black-translucent' : 'default';
    
    // Удаляем старый meta тег и создаем новый для принудительного обновления
    const existingThemeColor = document.querySelector('meta[name="theme-color"]');
    if (existingThemeColor) {
      existingThemeColor.remove();
    }
    
    const themeColorMeta = document.createElement('meta');
    themeColorMeta.name = 'theme-color';
    themeColorMeta.content = themeColor;
    document.head.appendChild(themeColorMeta);
    
    // Обновляем статус-бар для iOS
    const existingStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (existingStatusBar) {
      existingStatusBar.setAttribute('content', statusBarStyle);
    } else {
      const statusBarMeta = document.createElement('meta');
      statusBarMeta.name = 'apple-mobile-web-app-status-bar-style';
      statusBarMeta.content = statusBarStyle;
      document.head.appendChild(statusBarMeta);
    }
    
    // Принудительное обновление через requestAnimationFrame для Safari
    requestAnimationFrame(() => {
      document.documentElement.style.backgroundColor = themeColor;
      document.body.style.backgroundColor = themeColor;
    });
  }, [theme]);

  // Инициализация темы при первой загрузке
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme;
    const initialTheme = saved === 'dark' || saved === 'light' ? saved : 'dark';
    document.documentElement.setAttribute('data-theme', initialTheme);
    
    // Устанавливаем начальный theme-color
    const themeColor = initialTheme === 'dark' ? '#000000' : '#ffffff';
    const statusBarStyle = initialTheme === 'dark' ? 'black-translucent' : 'default';
    
    const existingThemeColor = document.querySelector('meta[name="theme-color"]');
    if (existingThemeColor) {
      existingThemeColor.setAttribute('content', themeColor);
    }
    
    const existingStatusBar = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
    if (existingStatusBar) {
      existingStatusBar.setAttribute('content', statusBarStyle);
    }
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

