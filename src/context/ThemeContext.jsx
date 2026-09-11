import { createContext, useContext, useEffect, useState } from 'react';

// Each theme defines the accent trio used across gradients, glows and sparkles.
export const THEMES = {
  nebula: {
    label: 'Nebula',
    violet: '#8b5cf6',
    violetSoft: '#a78bfa',
    magenta: '#e879f9',
    cyan: '#5eead4',
  },
  aurora: {
    label: 'Aurora',
    violet: '#34d399',
    violetSoft: '#6ee7b7',
    magenta: '#22d3ee',
    cyan: '#a3e635',
  },
  sunset: {
    label: 'Sunset',
    violet: '#fb7185',
    violetSoft: '#fda4af',
    magenta: '#fbbf24',
    cyan: '#f97316',
  },
  ocean: {
    label: 'Ocean',
    violet: '#38bdf8',
    violetSoft: '#7dd3fc',
    magenta: '#818cf8',
    cyan: '#2dd4bf',
  },
};

const MODE_TOKENS = {
  dark: {
    bg: '#0a0713',
    bgPanel: '#130b23',
    bgPanel2: '#170f2a',
    text: '#f2eefb',
    muted: '#9c92b8',
    line: 'rgba(255,255,255,0.09)',
    lineStrong: 'rgba(255,255,255,0.16)',
  },
  light: {
    bg: '#f7f5fb',
    bgPanel: '#ffffff',
    bgPanel2: '#f1edfa',
    text: '#1c1428',
    muted: '#5f5773',
    line: 'rgba(20,10,40,0.09)',
    lineStrong: 'rgba(20,10,40,0.16)',
  },
};

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [themeKey, setThemeKey] = useState(() => localStorage.getItem('portfolio-theme') || 'nebula');
  const [mode, setMode] = useState(() => localStorage.getItem('portfolio-mode') || 'dark');
  const [sparkles, setSparkles] = useState(() => {
    const stored = localStorage.getItem('portfolio-sparkles');
    return stored === null ? true : stored === 'true';
  });

  useEffect(() => {
    const accents = THEMES[themeKey];
    const tokens = MODE_TOKENS[mode];
    const root = document.documentElement.style;
    root.setProperty('--violet', accents.violet);
    root.setProperty('--violet-soft', accents.violetSoft);
    root.setProperty('--magenta', accents.magenta);
    root.setProperty('--cyan', accents.cyan);
    root.setProperty('--bg', tokens.bg);
    root.setProperty('--bg-panel', tokens.bgPanel);
    root.setProperty('--bg-panel-2', tokens.bgPanel2);
    root.setProperty('--text', tokens.text);
    root.setProperty('--muted', tokens.muted);
    root.setProperty('--line', tokens.line);
    root.setProperty('--line-strong', tokens.lineStrong);
    document.body.dataset.mode = mode;
    localStorage.setItem('portfolio-theme', themeKey);
    localStorage.setItem('portfolio-mode', mode);
    localStorage.setItem('portfolio-sparkles', String(sparkles));
  }, [themeKey, mode, sparkles]);

  const toggleMode = () => setMode((m) => (m === 'dark' ? 'light' : 'dark'));

  return (
    <ThemeContext.Provider
      value={{ themeKey, setThemeKey, mode, toggleMode, sparkles, setSparkles, accents: THEMES[themeKey] }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within a ThemeProvider');
  return ctx;
}
