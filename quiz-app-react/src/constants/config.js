export const APP_CONFIG = {
  APP_NAME: 'Quiz Challenge',
  APP_TAGLINE: 'Testez et améliorez vos connaissances',
  VERSION: '1.0.0',
  QUESTIONS_PER_QUIZ: 10,
  PASSING_SCORE: 70, // Pourcentage minimum pour réussir
  TIMER_DURATION: 600, // 10 minutes en secondes (pour mode examen)
  SHOW_EXPLANATIONS: true,
  ALLOW_REVIEW: true // Permet de revoir les questions en mode pratique
};

export const STORAGE_KEYS = {
  QUIZ_RESULTS: 'quiz_results',
  USER_STATS: 'user_stats',
  THEME: 'app_theme',
  USER_PREFERENCES: 'user_preferences'
};

export const QUIZ_MODES = {
  PRACTICE: 'practice',
  EXAM: 'exam'
};
