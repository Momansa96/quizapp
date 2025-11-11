import { Link, useLocation } from 'react-router-dom';
import { ThemeToggle } from '../common/ThemeToggle';
import { ROUTES } from '../../constants/routes';
import styles from './Header.module.css';

export const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className={styles.header}>
      <Link to={ROUTES.HOME} className={styles.logo}>
        QUIZ
      </Link>

      <div className={styles.navContainer}>
        <nav className={styles.navbar}>
          <Link
            to={ROUTES.HOME}
            className={isActive(ROUTES.HOME) ? styles.active : ''}
          >
            Accueil
          </Link>
          <Link
            to={ROUTES.ABOUT}
            className={isActive(ROUTES.ABOUT) ? styles.active : ''}
          >
            À propos
          </Link>
          <Link
            to={ROUTES.QUIZ_SELECTION}
            className={isActive(ROUTES.QUIZ_SELECTION) ? styles.active : ''}
          >
            Quiz
          </Link>
          <Link
            to={ROUTES.CONTACT}
            className={isActive(ROUTES.CONTACT) ? styles.active : ''}
          >
            Contact
          </Link>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
};
