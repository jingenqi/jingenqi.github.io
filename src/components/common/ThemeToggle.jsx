import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const STORAGE_KEY = 'enqi-theme-v1';

function readSavedTheme() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // The current page can still switch themes when storage is unavailable.
  }
}

function getInitialTheme() {
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);
  const isDark = theme === 'dark';
  const label = isDark ? 'Switch to light appearance' : 'Switch to dark appearance';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (event) => {
      if (!readSavedTheme()) {
        setTheme(event.matches ? 'dark' : 'light');
      }
    };

    media.addEventListener('change', handleSystemChange);
    return () => media.removeEventListener('change', handleSystemChange);
  }, []);

  function toggleTheme() {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      saveTheme(next);
      return next;
    });
  }

  return (
    <button
      type="button"
      className="icon-button"
      aria-label={label}
      title={label}
      onClick={toggleTheme}
    >
      {isDark ? <Sun aria-hidden="true" size={18} /> : <Moon aria-hidden="true" size={18} />}
    </button>
  );
}
