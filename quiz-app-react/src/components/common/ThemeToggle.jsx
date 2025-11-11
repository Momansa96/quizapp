import { useTheme } from '../../context/ThemeContext';
import styles from './ThemeToggle.module.css';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Mode ${theme === 'dark' ? 'clair' : 'sombre'}`}
    >
      <div className={styles.toggleTrack}>
        <div className={styles.toggleThumb}>
          {theme === 'dark' ? '🌙' : '☀️'}
        </div>
      </div>
    </button>
  );
};
