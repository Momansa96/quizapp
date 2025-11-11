import styles from './QuestionDisplay.module.css';

export const QuestionDisplay = ({ question, currentIndex, totalQuestions }) => {
  return (
    <div className={styles.questionDisplay}>
      <div className={styles.questionHeader}>
        <span className={styles.questionNumber}>
          Question {currentIndex + 1} / {totalQuestions}
        </span>
        {question.difficulty && (
          <span className={`${styles.difficulty} ${styles[question.difficulty]}`}>
            {question.difficulty === 'easy' && '✓ Facile'}
            {question.difficulty === 'medium' && '★ Moyen'}
            {question.difficulty === 'hard' && '⚡ Difficile'}
          </span>
        )}
      </div>
      <h2 className={styles.questionText}>{question.question}</h2>
    </div>
  );
};
