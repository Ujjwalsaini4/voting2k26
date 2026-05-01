import { useState, useEffect } from 'react';

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    const savedTheme = localStorage.getItem('app-theme');
    return savedTheme || 'system';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    
    const applyTheme = (currentTheme) => {
      root.classList.remove('light', 'dark');
      
      if (currentTheme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        root.classList.add(systemPrefersDark ? 'dark' : 'light');
      } else {
        root.classList.add(currentTheme);
      }
    };

    applyTheme(theme);

    // Listener for system theme changes if set to system
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = () => {
      if (theme === 'system') {
        applyTheme('system');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const setTheme = (newTheme) => {
    setThemeState(newTheme);
    localStorage.setItem('app-theme', newTheme);
  };

  return { theme, setTheme };
}
