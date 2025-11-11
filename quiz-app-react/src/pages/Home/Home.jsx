import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Modal } from '../../components/common/Modal';
import { ROUTES } from '../../constants/routes';
import styles from './Home.module.css';

export const Home = () => {
  const [showInstructions, setShowInstructions] = useState(false);
  const navigate = useNavigate();

  const handleStart = () => {
    setShowInstructions(true);
  };

  const handleContinue = () => {
    setShowInstructions(false);
    navigate(ROUTES.QUIZ_SELECTION);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <h1 className="animate-slideInDown">Quiz Challenge</h1>
        <p className="animate-slideInUp">
          Vous désirez tester vos connaissances ? Plus de souci, Quiz Challenge
          vous propose un QCM adapté pour consolider vos connaissances
          théoriques. N'hésitez pas !!!
        </p>
        <Button
          variant="primary"
          size="large"
          onClick={handleStart}
          className={`${styles.startBtn} animate-scaleIn`}
        >
          Commencer
        </Button>
      </div>

      <Modal
        isOpen={showInstructions}
        onClose={() => setShowInstructions(false)}
        title="Guide du Quiz"
      >
        <div className={styles.instructions}>
          <div className={styles.instructionItem}>
            <span className={styles.instructionNumber}>1</span>
            <p>
              Ce jeu a pour but de tester vos connaissances dans un langage
              spécifique.
            </p>
          </div>
          <div className={styles.instructionItem}>
            <span className={styles.instructionNumber}>2</span>
            <p>
              Prenez le temps de lire les questions ainsi que les réponses
              proposées.
            </p>
          </div>
          <div className={styles.instructionItem}>
            <span className={styles.instructionNumber}>3</span>
            <p>
              Votre choix est irrévocable ainsi que votre passage à une
              question.
            </p>
          </div>
          <div className={styles.instructionItem}>
            <span className={styles.instructionNumber}>4</span>
            <p>
              Vous avez la possibilité de reprendre le quiz autant de fois que
              vous voulez.
            </p>
          </div>
          <div className={styles.instructionItem}>
            <span className={styles.instructionNumber}>5</span>
            <p>
              Profitez du quiz pour améliorer vos connaissances théoriques.
              Cliquez sur Continuer pour commencer.
            </p>
          </div>

          <div className={styles.instructionButtons}>
            <Button
              variant="secondary"
              onClick={() => setShowInstructions(false)}
            >
              Sortir
            </Button>
            <Button variant="primary" onClick={handleContinue}>
              Continuer
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
