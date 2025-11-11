export const categories = [
  {
    id: 'javascript',
    name: 'JavaScript',
    description: 'Testez vos connaissances en JavaScript : syntaxe, méthodes, DOM et concepts fondamentaux',
    icon: '/img/javascript-logo-png_seeklogo-255387.png',
    color: '#F7DF1E',
    totalQuestions: 20,
    levels: ['easy', 'medium', 'hard'],
    comingSoon: false
  },
  {
    id: 'html',
    name: 'HTML',
    description: 'Évaluez votre maîtrise du HTML : balises, structure, sémantique et accessibilité',
    icon: '/img/html5-logo-png_seeklogo-206834.png',
    color: '#E34F26',
    totalQuestions: 30,
    levels: ['easy', 'medium', 'hard'],
    comingSoon: false
  },
  {
    id: 'css',
    name: 'CSS',
    description: 'Vérifiez vos compétences CSS : sélecteurs, flexbox, grid, animations',
    icon: '/img/css3-logo-png_seeklogo-186678.png',
    color: '#1572B6',
    totalQuestions: 30,
    levels: ['easy', 'medium', 'hard'],
    comingSoon: false
  },
  {
    id: 'react',
    name: 'React',
    description: 'Testez votre expertise React : composants, hooks, state management',
    icon: '/img/react-logo-png_seeklogo-273845.png',
    color: '#61DAFB',
    totalQuestions: 30,
    levels: ['easy', 'medium', 'hard'],
    comingSoon: false
  }
];

export const difficulties = [
  {
    id: 'easy',
    label: 'Facile',
    description: 'Questions de base pour débutants',
    points: 1,
    color: '#4CAF50',
    icon: '✓'
  },
  {
    id: 'medium',
    label: 'Moyen',
    description: 'Questions intermédiaires',
    points: 2,
    color: '#FF9800',
    icon: '★'
  },
  {
    id: 'hard',
    label: 'Difficile',
    description: 'Questions avancées',
    points: 3,
    color: '#F44336',
    icon: '⚡'
  }
];
