import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { CircularProgress } from '../../components/results/CircularProgress';
import { ROUTES } from '../../constants/routes';
import styles from './Results.module.css';

export const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { results, category } = location.state || {};

  useEffect(() => {
    // Rediriger si pas de résultats
    if (!results) {
      navigate(ROUTES.HOME);
    }
  }, [results, navigate]);

  if (!results) return null;

  const {
    score,
    maxScore,
    percentage,
    correctAnswers,
    wrongAnswers,
    totalQuestions,
    timeSpent,
    passed
  } = results;

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  const getMessage = () => {
    if (percentage >= 90) return 'Excellent ! 🎉';
    if (percentage >= 70) return 'Très bien ! 👏';
    if (percentage >= 50) return 'Bien ! 👍';
    return 'Continuez à pratiquer ! 💪';
  };

  return (
    <div
      className={styles.resultsContainer}
      style={{
        backgroundImage: passed
          ? 'url(/img/success.jpg)'
          : 'url(/img/lose.jpg)'
      }}
    >
      <div className={styles.resultsOverlay}>
        <div className="container">
          <Card className={styles.resultsCard}>
            <h1 className={styles.resultsTitle}>
              {passed ? '🎉 Félicitations !' : '😔 Quiz terminé'}
            </h1>

            <p className={styles.resultsMessage}>{getMessage()}</p>

            <div className={styles.progressSection}>
              <CircularProgress percentage={percentage} size={220} />
            </div>

            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{score}</span>
                <span className={styles.statLabel}>Score obtenu</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{maxScore}</span>
                <span className={styles.statLabel}>Score maximum</span>
              </div>
              <div className={styles.statItem}>
                <span className={`${styles.statValue} ${styles.success}`}>
                  {correctAnswers}
                </span>
                <span className={styles.statLabel}>✓ Correctes</span>
              </div>
              <div className={styles.statItem}>
                <span className={`${styles.statValue} ${styles.error}`}>
                  {wrongAnswers}
                </span>
                <span className={styles.statLabel}>✕ Incorrectes</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{totalQuestions}</span>
                <span className={styles.statLabel}>Total questions</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statValue}>{formatTime(timeSpent)}</span>
                <span className={styles.statLabel}>⏱ Temps écoulé</span>
              </div>
            </div>

            {passed && (
              <div className={styles.passedBadge}>
                <span className={styles.badgeIcon}>🏆</span>
                <span>Quiz réussi !</span>
              </div>
            )}

            <div className={styles.resultsActions}>
              <Button
                variant="secondary"
                size="large"
                onClick={() => navigate(`/quiz/${category.id}`)}
              >
                🔄 Réessayer
              </Button>
              <Button
                variant="primary"
                size="large"
                onClick={() => navigate(ROUTES.HOME)}
              >
                🏠 Retour à l'accueil
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
