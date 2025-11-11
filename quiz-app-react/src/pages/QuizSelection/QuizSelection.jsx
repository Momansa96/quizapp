import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { categories } from '../../data/categories';
import styles from './QuizSelection.module.css';

export const QuizSelection = () => {
  const navigate = useNavigate();

  const handleSelectQuiz = (categoryId) => {
    navigate(`/quiz/${categoryId}`);
  };

  return (
    <div className={styles.quizSelectionContainer}>
      <div className="container">
        <h1 className={`${styles.pageTitle} animate-slideInDown`}>
          Choisissez votre Quiz
        </h1>
        <p className={`${styles.pageSubtitle} animate-slideInUp`}>
          Sélectionnez une thématique pour commencer le test
        </p>

        <div className={styles.quizGrid}>
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`${styles.quizCard} animate-scaleIn`}
              hover={!category.comingSoon}
              onClick={!category.comingSoon ? () => handleSelectQuiz(category.id) : undefined}
            >
              <div className={styles.quizIcon}>
                <img src={category.icon} alt={`${category.name} logo`} />
              </div>
              <h2 className={styles.quizTitle}>{category.name}</h2>
              <p className={styles.quizDescription}>{category.description}</p>

              <div className={styles.quizInfo}>
                <span className={styles.quizQuestions}>
                  {category.totalQuestions} questions
                </span>
                <span className={styles.quizLevels}>
                  {category.levels.length} niveaux
                </span>
              </div>

              {category.comingSoon ? (
                <div className={styles.comingSoonBadge}>Bientôt disponible</div>
              ) : (
                <Button
                  variant="primary"
                  fullWidth
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSelectQuiz(category.id);
                  }}
                >
                  Commencer
                </Button>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
