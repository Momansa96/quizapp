import styles from './Card.module.css';

export const Card = ({
  children,
  className = '',
  hover = false,
  onClick
}) => {
  const classes = [
    styles.card,
    hover ? styles.cardHover : '',
    onClick ? styles.cardClickable : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
};
