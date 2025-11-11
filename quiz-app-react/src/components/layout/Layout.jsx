import { Header } from './Header';
import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.mainContent}>
        {children}
      </main>
    </div>
  );
};
