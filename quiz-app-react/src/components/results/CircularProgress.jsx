import { useEffect, useState } from 'react';
import styles from './CircularProgress.module.css';

export const CircularProgress = ({ percentage, size = 200 }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    // Animation progressive du pourcentage
    const duration = 2000; // 2 secondes
    const steps = 60;
    const increment = percentage / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= percentage) {
        setCurrentPercentage(percentage);
        clearInterval(timer);
      } else {
        setCurrentPercentage(Math.round(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [percentage]);

  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (currentPercentage / 100) * circumference;

  const getColor = () => {
    if (currentPercentage >= 70) return '#4CAF50'; // Vert
    if (currentPercentage >= 50) return '#FF9800'; // Orange
    return '#F44336'; // Rouge
  };

  return (
    <div className={styles.circularProgress} style={{ width: size, height: size }}>
      <svg width={size} height={size} className={styles.progressSvg}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={styles.progressBackground}
          strokeWidth="10"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          className={styles.progressCircle}
          strokeWidth="10"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          stroke={getColor()}
          strokeLinecap="round"
        />
      </svg>
      <div className={styles.progressValue} style={{ color: getColor() }}>
        {currentPercentage}%
      </div>
    </div>
  );
};
