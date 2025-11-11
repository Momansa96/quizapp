import { useParams, useNavigate } from 'react-router-dom';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { QuestionDisplay } from '../../components/quiz/QuestionDisplay';
import { OptionsList } from '../../components/quiz/OptionsList';
import { ProgressBar } from '../../components/quiz/ProgressBar';
import { useQuizLogic } from '../../hooks/useQuizLogic';
import { javascriptQuestions } from '../../data/javascript';
import { htmlQuestions } from '../../data/html';
import { cssQuestions } from '../../data/css';
import { reactQuestions } from '../../data/react';
import { categories } from '../../data/categories';
import { ROUTES } from '../../constants/routes';
import styles from './QuizPlay.module.css';

export const QuizPlay = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Récupérer les questions selon la catégorie
  const getQuestions = () => {
    switch (category) {
      case 'javascript':
        return javascriptQuestions;
      case 'html':
        return htmlQuestions;
      case 'css':
        return cssQuestions;
      case 'react':
        return reactQuestions;
      default:
        return javascriptQuestions;
    }
  };

  const questions = getQuestions();
  const categoryInfo = categories.find(cat => cat.id === category);

  const {
    currentQuestion,
    currentQuestionIndex,
    selectedOption,
    isAnswered,
    score,
    totalQuestions,
    isLastQuestion,
    isQuizComplete,
    handleSelectOption,
    handleNextQuestion,
    getResults
  } = useQuizLogic(questions);

  // Rediriger vers Results si le quiz est terminé
  if (isQuizComplete) {
    const results = getResults();
    navigate(ROUTES.RESULTS, { state: { results, category: categoryInfo } });
    return null;
  }

  return (
    <div className={styles.quizPlayContainer}>
      <div className="container">
        <div className={styles.quizHeader}>
          <h1 className={styles.quizTitle}>
            {categoryInfo?.icon} {categoryInfo?.name} Quiz
          </h1>
          <Button
            variant="ghost"
            size="small"
            onClick={() => navigate(ROUTES.QUIZ_SELECTION)}
          >
            ← Retour
          </Button>
        </div>

        <ProgressBar
          current={currentQuestionIndex + 1}
          total={totalQuestions}
          score={score}
        />

        <Card className={styles.quizCard}>
          <QuestionDisplay
            question={currentQuestion}
            currentIndex={currentQuestionIndex}
            totalQuestions={totalQuestions}
          />

          <OptionsList
            options={currentQuestion.options}
            selectedOption={selectedOption}
            correctAnswer={currentQuestion.correctAnswer}
            onSelectOption={handleSelectOption}
            isAnswered={isAnswered}
          />

          {isAnswered && currentQuestion.explanation && (
            <div className={styles.explanation}>
              <div className={styles.explanationHeader}>
                <span className={styles.explanationIcon}>💡</span>
                <strong>Explication :</strong>
              </div>
              <p>{currentQuestion.explanation}</p>
            </div>
          )}

          <div className={styles.quizActions}>
            <Button
              variant="primary"
              size="large"
              fullWidth
              onClick={handleNextQuestion}
              disabled={selectedOption === null && !isAnswered}
            >
              {!isAnswered && 'Valider la réponse'}
              {isAnswered && !isLastQuestion && 'Question suivante →'}
              {isAnswered && isLastQuestion && 'Voir les résultats 🎉'}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};
