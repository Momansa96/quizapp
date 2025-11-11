export const reactQuestions = [
  // Questions Faciles (1-10)
  {
    id: "react-001",
    category: "react",
    difficulty: "easy",
    question: "Qu'est-ce que JSX ?",
    options: [
      "Une syntaxe qui permet d'écrire du HTML dans JavaScript",
      "Un nouveau langage de programmation",
      "Une bibliothèque CSS",
      "Un framework backend"
    ],
    correctAnswer: 0,
    explanation: "JSX (JavaScript XML) est une extension syntaxique qui permet d'écrire des structures ressemblant à du HTML dans du code JavaScript.",
    points: 1,
    tags: ["jsx", "basics"]
  },
  {
    id: "react-002",
    category: "react",
    difficulty: "easy",
    question: "Comment créer un composant fonctionnel en React ?",
    options: [
      "function MonComposant() { return <div>Contenu</div>; }",
      "class MonComposant { render() { return <div>Contenu</div>; } }",
      "component MonComposant() { return <div>Contenu</div>; }",
      "const MonComposant = <div>Contenu</div>;"
    ],
    correctAnswer: 0,
    explanation: "Un composant fonctionnel est une fonction JavaScript qui retourne du JSX.",
    points: 1,
    tags: ["components", "functional"]
  },
  {
    id: "react-003",
    category: "react",
    difficulty: "easy",
    question: "Comment passer des données à un composant enfant ?",
    options: [
      "Via les props",
      "Via les states",
      "Via les refs",
      "Via les contexts"
    ],
    correctAnswer: 0,
    explanation: "Les props (propriétés) permettent de passer des données d'un composant parent à un composant enfant.",
    points: 1,
    tags: ["props", "basics"]
  },
  {
    id: "react-004",
    category: "react",
    difficulty: "easy",
    question: "Quel hook permet de gérer l'état local d'un composant ?",
    options: [
      "useState",
      "useEffect",
      "useContext",
      "useReducer"
    ],
    correctAnswer: 0,
    explanation: "Le hook useState permet de déclarer et gérer une variable d'état dans un composant fonctionnel.",
    points: 1,
    tags: ["hooks", "useState"]
  },
  {
    id: "react-005",
    category: "react",
    difficulty: "easy",
    question: "Comment afficher une liste d'éléments en React ?",
    options: [
      "Avec map() et une key unique",
      "Avec forEach()",
      "Avec for loop",
      "Avec while loop"
    ],
    correctAnswer: 0,
    explanation: "On utilise map() pour transformer un tableau en éléments JSX, chacun avec une prop 'key' unique.",
    points: 1,
    tags: ["lists", "rendering"]
  },
  {
    id: "react-006",
    category: "react",
    difficulty: "easy",
    question: "Qu'est-ce qu'un composant contrôlé ?",
    options: [
      "Un composant de formulaire dont la valeur est gérée par React",
      "Un composant avec beaucoup de props",
      "Un composant qui contrôle d'autres composants",
      "Un composant sans state"
    ],
    correctAnswer: 0,
    explanation: "Un composant contrôlé est un élément de formulaire dont la valeur est contrôlée par l'état React.",
    points: 1,
    tags: ["forms", "controlled-components"]
  },
  {
    id: "react-007",
    category: "react",
    difficulty: "easy",
    question: "Comment gérer un événement de clic en React ?",
    options: [
      "onClick={handleClick}",
      "onclick='handleClick()'",
      "on-click={handleClick}",
      "click={handleClick}"
    ],
    correctAnswer: 0,
    explanation: "En React, on utilise camelCase (onClick) et on passe une référence de fonction sans parenthèses.",
    points: 1,
    tags: ["events", "basics"]
  },
  {
    id: "react-008",
    category: "react",
    difficulty: "easy",
    question: "Que retourne un composant React ?",
    options: [
      "Du JSX",
      "Du HTML pur",
      "Du CSS",
      "Du JSON"
    ],
    correctAnswer: 0,
    explanation: "Un composant React retourne du JSX qui sera transformé en éléments React puis en DOM.",
    points: 1,
    tags: ["components", "jsx"]
  },
  {
    id: "react-009",
    category: "react",
    difficulty: "easy",
    question: "Comment importer React dans un fichier ?",
    options: [
      "import React from 'react'",
      "require('react')",
      "include React",
      "use React"
    ],
    correctAnswer: 0,
    explanation: "On utilise la syntaxe ES6 import pour importer React (note: React 17+ n'en a plus besoin pour le JSX).",
    points: 1,
    tags: ["imports", "basics"]
  },
  {
    id: "react-010",
    category: "react",
    difficulty: "easy",
    question: "Qu'est-ce que le Virtual DOM ?",
    options: [
      "Une représentation en mémoire du DOM réel",
      "Un DOM invisible",
      "Un DOM pour la réalité virtuelle",
      "Un DOM temporaire"
    ],
    correctAnswer: 0,
    explanation: "Le Virtual DOM est une copie légère du DOM réel maintenue en mémoire, permettant des mises à jour optimisées.",
    points: 1,
    tags: ["virtual-dom", "concepts"]
  },
  // Questions Moyennes (11-20)
  {
    id: "react-011",
    category: "react",
    difficulty: "medium",
    question: "Quel hook utiliser pour effectuer des effets de bord ?",
    options: [
      "useEffect",
      "useState",
      "useSideEffect",
      "useCallback"
    ],
    correctAnswer: 0,
    explanation: "useEffect permet d'exécuter du code lors du montage, mise à jour ou démontage d'un composant.",
    points: 2,
    tags: ["hooks", "useEffect"]
  },
  {
    id: "react-012",
    category: "react",
    difficulty: "medium",
    question: "Comment éviter les re-renders inutiles d'un composant ?",
    options: [
      "React.memo() ou useMemo()",
      "shouldComponentUpdate()",
      "preventDefault()",
      "useNoRender()"
    ],
    correctAnswer: 0,
    explanation: "React.memo() mémorise un composant et useMemo() mémorise une valeur calculée pour éviter les re-calculs.",
    points: 2,
    tags: ["performance", "memoization"]
  },
  {
    id: "react-013",
    category: "react",
    difficulty: "medium",
    question: "Quelle est la différence entre state et props ?",
    options: [
      "state est local et mutable, props sont passées par le parent et immuables",
      "props sont locales, state vient du parent",
      "Aucune différence",
      "state est pour les classes, props pour les fonctions"
    ],
    correctAnswer: 0,
    explanation: "Le state est géré localement par le composant, les props sont passées depuis le parent et ne doivent pas être modifiées.",
    points: 2,
    tags: ["state", "props", "concepts"]
  },
  {
    id: "react-014",
    category: "react",
    difficulty: "medium",
    question: "À quoi sert useContext ?",
    options: [
      "À accéder à un Context sans Consumer",
      "À créer un nouveau contexte",
      "À modifier le contexte",
      "À supprimer un contexte"
    ],
    correctAnswer: 0,
    explanation: "useContext permet d'accéder aux valeurs d'un Context directement dans un composant fonctionnel.",
    points: 2,
    tags: ["hooks", "context"]
  },
  {
    id: "react-015",
    category: "react",
    difficulty: "medium",
    question: "Comment gérer plusieurs états liés ensemble ?",
    options: [
      "useReducer",
      "Plusieurs useState",
      "useMultiState",
      "useComplexState"
    ],
    correctAnswer: 0,
    explanation: "useReducer est idéal pour gérer des états complexes avec plusieurs sous-valeurs liées.",
    points: 2,
    tags: ["hooks", "useReducer"]
  },
  {
    id: "react-016",
    category: "react",
    difficulty: "medium",
    question: "Qu'est-ce qu'une prop 'key' et pourquoi est-elle importante ?",
    options: [
      "Un identifiant unique pour aider React à identifier les éléments",
      "Une clé de sécurité",
      "Une prop obligatoire pour tous les composants",
      "Un mot-clé réservé"
    ],
    correctAnswer: 0,
    explanation: "La prop 'key' aide React à identifier quels éléments ont changé, été ajoutés ou supprimés dans une liste.",
    points: 2,
    tags: ["keys", "lists", "performance"]
  },
  {
    id: "react-017",
    category: "react",
    difficulty: "medium",
    question: "Comment créer une référence à un élément DOM ?",
    options: [
      "useRef",
      "createRef",
      "useState",
      "getElementById"
    ],
    correctAnswer: 0,
    explanation: "useRef crée une référence mutable qui persiste pendant toute la durée de vie du composant.",
    points: 2,
    tags: ["hooks", "useRef", "refs"]
  },
  {
    id: "react-018",
    category: "react",
    difficulty: "medium",
    question: "Qu'est-ce que le lifting state up ?",
    options: [
      "Déplacer l'état vers un composant parent commun",
      "Augmenter la valeur d'un état",
      "Créer un état global",
      "Supprimer un état"
    ],
    correctAnswer: 0,
    explanation: "Le lifting state up consiste à déplacer l'état vers le plus proche ancêtre commun pour le partager entre composants.",
    points: 2,
    tags: ["state", "patterns"]
  },
  {
    id: "react-019",
    category: "react",
    difficulty: "medium",
    question: "Comment conditionnellement afficher un composant ?",
    options: [
      "Avec && ou l'opérateur ternaire",
      "Avec if/else dans le JSX",
      "Avec switch/case",
      "Avec while"
    ],
    correctAnswer: 0,
    explanation: "On utilise l'opérateur && pour du contenu conditionnel simple ou le ternaire (? :) pour deux alternatives.",
    points: 2,
    tags: ["conditional-rendering", "jsx"]
  },
  {
    id: "react-020",
    category: "react",
    difficulty: "medium",
    question: "Qu'est-ce qu'un Custom Hook ?",
    options: [
      "Une fonction réutilisable qui utilise des hooks React",
      "Un hook créé par l'équipe React",
      "Un hook pour personnaliser le style",
      "Un hook obsolète"
    ],
    correctAnswer: 0,
    explanation: "Un Custom Hook est une fonction JavaScript commençant par 'use' qui peut utiliser d'autres hooks.",
    points: 2,
    tags: ["hooks", "custom-hooks"]
  },
  // Questions Difficiles (21-30)
  {
    id: "react-021",
    category: "react",
    difficulty: "hard",
    question: "Qu'est-ce que le reconciliation algorithm ?",
    options: [
      "L'algorithme qui compare le Virtual DOM avec le DOM réel",
      "Un algorithme de tri",
      "Un algorithme de recherche",
      "Un algorithme de cryptage"
    ],
    correctAnswer: 0,
    explanation: "La réconciliation est le processus par lequel React compare le Virtual DOM avec le DOM et applique les changements nécessaires.",
    points: 3,
    tags: ["reconciliation", "virtual-dom", "advanced"]
  },
  {
    id: "react-022",
    category: "react",
    difficulty: "hard",
    question: "À quoi sert useCallback ?",
    options: [
      "Mémoriser une fonction pour éviter sa recréation",
      "Créer une fonction de callback",
      "Appeler une fonction",
      "Annuler un callback"
    ],
    correctAnswer: 0,
    explanation: "useCallback mémorise une fonction pour éviter de la recréer à chaque render, utile pour les optimisations.",
    points: 3,
    tags: ["hooks", "useCallback", "performance"]
  },
  {
    id: "react-023",
    category: "react",
    difficulty: "hard",
    question: "Qu'est-ce qu'une Higher Order Component (HOC) ?",
    options: [
      "Une fonction qui prend un composant et retourne un nouveau composant",
      "Un composant de haut niveau dans l'arbre",
      "Un composant avec beaucoup de props",
      "Un composant React natif"
    ],
    correctAnswer: 0,
    explanation: "Un HOC est un pattern avancé de réutilisation de logique entre composants en les 'wrappant'.",
    points: 3,
    tags: ["hoc", "patterns", "advanced"]
  },
  {
    id: "react-024",
    category: "react",
    difficulty: "hard",
    question: "Qu'est-ce que le code splitting en React ?",
    options: [
      "Diviser le code en plusieurs bundles chargés à la demande",
      "Séparer le code en plusieurs fichiers",
      "Diviser un composant en plusieurs",
      "Créer plusieurs applications"
    ],
    correctAnswer: 0,
    explanation: "Le code splitting permet de charger le code à la demande avec React.lazy() et Suspense.",
    points: 3,
    tags: ["performance", "lazy-loading", "advanced"]
  },
  {
    id: "react-025",
    category: "react",
    difficulty: "hard",
    question: "À quoi sert useImperativeHandle ?",
    options: [
      "Personnaliser la valeur exposée via une ref",
      "Gérer les événements",
      "Créer des hooks",
      "Modifier le DOM directement"
    ],
    correctAnswer: 0,
    explanation: "useImperativeHandle permet de personnaliser l'instance exposée aux composants parents via ref.",
    points: 3,
    tags: ["hooks", "refs", "advanced"]
  },
  {
    id: "react-026",
    category: "react",
    difficulty: "hard",
    question: "Qu'est-ce qu'un Error Boundary ?",
    options: [
      "Un composant qui capture les erreurs JavaScript dans son arbre",
      "Une limite de taille de composant",
      "Une erreur critique",
      "Un composant qui gère les formulaires"
    ],
    correctAnswer: 0,
    explanation: "Les Error Boundaries capturent les erreurs dans leurs composants enfants et affichent une UI de secours.",
    points: 3,
    tags: ["error-handling", "advanced"]
  },
  {
    id: "react-027",
    category: "react",
    difficulty: "hard",
    question: "Qu'est-ce que le pattern Render Props ?",
    options: [
      "Passer une fonction comme prop qui retourne du JSX",
      "Afficher toutes les props",
      "Un nouveau hook",
      "Une méthode de rendu"
    ],
    correctAnswer: 0,
    explanation: "Le pattern Render Props utilise une prop qui est une fonction pour partager du code entre composants.",
    points: 3,
    tags: ["patterns", "render-props", "advanced"]
  },
  {
    id: "react-028",
    category: "react",
    difficulty: "hard",
    question: "Comment optimiser les re-renders d'une longue liste ?",
    options: [
      "Virtualisation avec react-window ou react-virtualized",
      "Cacher les éléments",
      "Réduire le nombre d'éléments",
      "Utiliser display: none"
    ],
    correctAnswer: 0,
    explanation: "La virtualisation ne rend que les éléments visibles dans le viewport, améliorant drastiquement les performances.",
    points: 3,
    tags: ["performance", "virtualization", "advanced"]
  },
  {
    id: "react-029",
    category: "react",
    difficulty: "hard",
    question: "Qu'est-ce que le Concurrent Mode ?",
    options: [
      "Un mode qui permet à React d'interrompre le rendu pour des tâches urgentes",
      "Un mode multi-thread",
      "Un mode de développement",
      "Un mode de production"
    ],
    correctAnswer: 0,
    explanation: "Le Concurrent Mode permet à React de travailler sur plusieurs tâches et de prioriser les mises à jour urgentes.",
    points: 3,
    tags: ["concurrent", "performance", "advanced"]
  },
  {
    id: "react-030",
    category: "react",
    difficulty: "hard",
    question: "Qu'est-ce que le pattern Compound Components ?",
    options: [
      "Des composants qui travaillent ensemble en partageant un état implicite",
      "Des composants combinés",
      "Des composants complexes",
      "Des composants multiples"
    ],
    correctAnswer: 0,
    explanation: "Le pattern Compound Components permet à plusieurs composants de travailler ensemble en partageant un état via Context.",
    points: 3,
    tags: ["patterns", "compound-components", "advanced"]
  }
];
