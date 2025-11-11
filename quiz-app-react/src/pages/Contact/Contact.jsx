import styles from './Contact.module.css';

export const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <div className="container">
        <h1 className={styles.pageTitle}>Contactez-nous</h1>

        <div className={styles.contactContent}>
          <p>
            Vous avez des questions, des suggestions d'amélioration ou souhaitez
            signaler un problème ? N'hésitez pas à nous contacter !
          </p>
          <p>
            Notre équipe est à votre écoute pour améliorer constamment votre
            expérience sur Quiz Challenge.
          </p>

          <div className={styles.contactMethods}>
            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>📧</div>
              <h3 className={styles.contactLabel}>Email</h3>
              <p className={styles.contactValue}>contact@quizchallenge.com</p>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>💬</div>
              <h3 className={styles.contactLabel}>Support</h3>
              <p className={styles.contactValue}>support@quizchallenge.com</p>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.contactIcon}>🐛</div>
              <h3 className={styles.contactLabel}>Bugs & Suggestions</h3>
              <p className={styles.contactValue}>feedback@quizchallenge.com</p>
            </div>
          </div>

          <p style={{ marginTop: 'var(--spacing-10)' }}>
            Nous nous efforçons de répondre à tous les messages dans les 48 heures.
          </p>
        </div>
      </div>
    </div>
  );
};
