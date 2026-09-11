import { useState } from 'react';
import { THEMES, useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle() {
  const { themeKey, setThemeKey, mode, toggleMode, sparkles, setSparkles } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className="theme-toggle">
      <button
        className="theme-toggle-btn"
        aria-label="Open theme settings"
        onClick={() => setOpen((o) => !o)}
      >
        <span className="theme-dot" style={{ background: THEMES[themeKey].violet }} />
        Theme
      </button>
      {open && (
        <div className="theme-panel">
          <div className="theme-panel-row">
            <span>Palette</span>
            <div className="theme-swatches">
              {Object.entries(THEMES).map(([key, t]) => (
                <button
                  key={key}
                  className={`theme-swatch ${key === themeKey ? 'active' : ''}`}
                  title={t.label}
                  onClick={() => setThemeKey(key)}
                  style={{ background: `linear-gradient(135deg, ${t.violet}, ${t.magenta})` }}
                />
              ))}
            </div>
          </div>
          <div className="theme-panel-row">
            <span>Mode</span>
            <button className="theme-mini-btn" onClick={toggleMode}>
              {mode === 'dark' ? '🌙 Dark' : '☀️ Light'}
            </button>
          </div>
          <div className="theme-panel-row">
            <span>Sparkles</span>
            <button className="theme-mini-btn" onClick={() => setSparkles((s) => !s)}>
              {sparkles ? '✨ On' : 'Off'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
