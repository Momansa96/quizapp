import styles from './ProgressBar.module.css';

export const ProgressBar = ({ current, total, score }) => {
  const progress = (current / total) * 100;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressInfo}>
        <span className={styles.progressText}>
          Question {current} / {total}
        </span>
        <span className={styles.scoreText}>Score: {score}</span>
      </div>
      <div className={styles.progressBarTrack}>
        <div
          className={styles.progressBarFill}
          style={{ width: `${progress}%` }}
        >
          <span className={styles.progressPercentage}>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};
