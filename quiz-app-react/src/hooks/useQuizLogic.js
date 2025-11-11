import { useState, useEffect } from 'react';
import { APP_CONFIG } from '../constants/config';

export const useQuizLogic = (questions) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [startTime] = useState(Date.now());

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  // Calculer les points selon la difficulté
  const calculatePoints = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 1;
      case 'medium':
        return 2;
      case 'hard':
        return 3;
      default:
        return 1;
    }
  };

  // Sélectionner une option
  const handleSelectOption = (optionIndex) => {
    if (isAnswered) return;

    setSelectedOption(optionIndex);
  };

  // Valider la réponse
  const handleSubmitAnswer = () => {
    if (selectedOption === null || isAnswered) return;

    const isCorrect = selectedOption === currentQuestion.correctAnswer;
    const points = isCorrect ? calculatePoints(currentQuestion.difficulty) : 0;

    setIsAnswered(true);

    if (isCorrect) {
      setScore(prevScore => prevScore + points);
      setCorrectAnswers(prev => prev + 1);
    } else {
      setWrongAnswers(prev => prev + 1);
    }

    // Enregistrer la réponse
    setAnswers(prev => [
      ...prev,
      {
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selectedAnswer: selectedOption,
        correctAnswer: currentQuestion.correctAnswer,
        isCorrect,
        points,
        difficulty: currentQuestion.difficulty
      }
    ]);
  };

  // Passer à la question suivante
  const handleNextQuestion = () => {
    if (!isAnswered) {
      handleSubmitAnswer();
      return;
    }

    if (isLastQuestion) {
      setIsQuizComplete(true);
    } else {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    }
  };

  // Réinitialiser le quiz
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setCorrectAnswers(0);
    setWrongAnswers(0);
    setAnswers([]);
    setIsQuizComplete(false);
  };

  // Résultats finaux
  const getResults = () => {
    const maxScore = questions.reduce((total, q) => total + calculatePoints(q.difficulty), 0);
    const percentage = Math.round((score / maxScore) * 100);
    const timeSpent = Math.round((Date.now() - startTime) / 1000); // en secondes
    const passed = percentage >= APP_CONFIG.PASSING_SCORE;

    return {
      score,
      maxScore,
      percentage,
      correctAnswers,
      wrongAnswers,
      totalQuestions,
      timeSpent,
      passed,
      answers
    };
  };

  return {
    // État
    currentQuestion,
    currentQuestionIndex,
    selectedOption,
    isAnswered,
    score,
    totalQuestions,
    isLastQuestion,
    isQuizComplete,

    // Actions
    handleSelectOption,
    handleSubmitAnswer,
    handleNextQuestion,
    handleRestart,

    // Résultats
    getResults
  };
};
