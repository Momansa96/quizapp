import styles from './About.module.css';

export const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className="container">
        <h1 className={styles.pageTitle}>À propos de Quiz Challenge</h1>

        <div className={styles.aboutContent}>
          <div className={styles.section}>
            <p>
              <strong>Quiz Challenge</strong> est une plateforme d'apprentissage interactive moderne,
              spécialement conçue pour les étudiants et développeurs souhaitant tester et améliorer
              leurs compétences en développement web.
            </p>
            <p>
              Notre mission est de rendre l'apprentissage du code plus interactif, ludique et
              accessible à tous, quel que soit votre niveau actuel.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>🎯 Nos objectifs</h2>
            <p>
              Nous croyons fermement que la pratique régulière à travers des quiz ciblés
              permet de consolider les connaissances théoriques et d'identifier rapidement
              les points à améliorer.
            </p>
            <p>
              Chaque question est soigneusement élaborée avec des explications détaillées
              pour vous aider à comprendre non seulement la bonne réponse, mais aussi
              le concept sous-jacent.
            </p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>✨ Fonctionnalités</h2>
            <div className={styles.featuresList}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>📚</div>
                <h3 className={styles.featureTitle}>Quiz Multithématiques</h3>
                <p className={styles.featureDescription}>
                  JavaScript, HTML, CSS, React et plus encore à venir
                </p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🎚️</div>
                <h3 className={styles.featureTitle}>Niveaux Adaptés</h3>
                <p className={styles.featureDescription}>
                  Questions faciles, moyennes et difficiles pour progresser à votre rythme
                </p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>💡</div>
                <h3 className={styles.featureTitle}>Explications Détaillées</h3>
                <p className={styles.featureDescription}>
                  Chaque réponse est accompagnée d'une explication pédagogique
                </p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>📊</div>
                <h3 className={styles.featureTitle}>Suivi des Performances</h3>
                <p className={styles.featureDescription}>
                  Statistiques détaillées pour mesurer votre progression
                </p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>🌙</div>
                <h3 className={styles.featureTitle}>Mode Sombre</h3>
                <p className={styles.featureDescription}>
                  Interface adaptative pour une expérience confortable
                </p>
              </div>

              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>📱</div>
                <h3 className={styles.featureTitle}>100% Responsive</h3>
                <p className={styles.featureDescription}>
                  Accessible sur mobile, tablette et ordinateur
                </p>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>🚀 Notre vision</h2>
            <p>
              Nous travaillons constamment à enrichir notre banque de questions et
              à développer de nouvelles fonctionnalités pour améliorer votre expérience
              d'apprentissage.
            </p>
            <p>
              Quiz Challenge évoluera avec vous pour devenir votre compagnon idéal
              dans votre parcours de développeur web.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
