import styles from './OptionsList.module.css';

export const OptionsList = ({
  options,
  selectedOption,
  correctAnswer,
  onSelectOption,
  isAnswered
}) => {
  const getOptionClass = (index) => {
    const classes = [styles.option];

    if (!isAnswered) {
      classes.push(styles.selectable);
      if (selectedOption === index) {
        classes.push(styles.selected);
      }
    } else {
      classes.push(styles.disabled);
      if (index === correctAnswer) {
        classes.push(styles.correct);
      } else if (selectedOption === index && selectedOption !== correctAnswer) {
        classes.push(styles.incorrect);
      }
    }

    return classes.join(' ');
  };

  const getOptionIcon = (index) => {
    if (!isAnswered) {
      return selectedOption === index ? '●' : '○';
    }

    if (index === correctAnswer) {
      return '✓';
    }

    if (selectedOption === index && selectedOption !== correctAnswer) {
      return '✕';
    }

    return '';
  };

  return (
    <div className={styles.optionsList}>
      {options.map((option, index) => (
        <button
          key={index}
          className={getOptionClass(index)}
          onClick={() => !isAnswered && onSelectOption(index)}
          disabled={isAnswered}
        >
          <span className={styles.optionIcon}>{getOptionIcon(index)}</span>
          <span className={styles.optionText}>{option}</span>
        </button>
      ))}
    </div>
  );
};
