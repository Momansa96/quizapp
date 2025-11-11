export const javascriptQuestions = [
  {
    id: "js-001",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle est la méthode JavaScript utilisée pour sélectionner un élément par son ID ?",
    options: [
      "getElementById()",
      "selectElementById()",
      "findElementById()",
      "queryElementById()"
    ],
    correctAnswer: 0,
    explanation: "getElementById() est la méthode standard du DOM pour sélectionner un élément HTML par son attribut id.",
    points: 1,
    tags: ["dom", "selection"]
  },
  {
    id: "js-002",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle méthode JavaScript est utilisée pour supprimer le dernier élément d'un tableau ?",
    options: [
      "pop()",
      "removeLast()",
      "deleteLast()",
      "splice()"
    ],
    correctAnswer: 0,
    explanation: "La méthode pop() supprime le dernier élément d'un tableau et le retourne.",
    points: 1,
    tags: ["array", "methods"]
  },
  {
    id: "js-003",
    category: "javascript",
    difficulty: "easy",
    question: "Quel est le symbole utilisé pour les commentaires sur une seule ligne en JavaScript ?",
    options: [
      "//",
      "--",
      "/*",
      "'"
    ],
    correctAnswer: 0,
    explanation: "Les deux slashes // permettent de créer des commentaires sur une seule ligne en JavaScript.",
    points: 1,
    tags: ["syntax", "comments"]
  },
  {
    id: "js-004",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle est la valeur de l'expression `5 == '5'` en JavaScript ?",
    options: [
      "true",
      "false",
      "erreur",
      "5"
    ],
    correctAnswer: 0,
    explanation: "L'opérateur == effectue une comparaison avec conversion de type, donc 5 == '5' retourne true.",
    points: 2,
    tags: ["operators", "comparison", "type-coercion"]
  },
  {
    id: "js-005",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle méthode JavaScript est utilisée pour ajouter un élément à la fin d'un tableau ?",
    options: [
      "push()",
      "append()",
      "addToEnd()",
      "insertLast()"
    ],
    correctAnswer: 0,
    explanation: "La méthode push() ajoute un ou plusieurs éléments à la fin d'un tableau.",
    points: 1,
    tags: ["array", "methods"]
  },
  {
    id: "js-006",
    category: "javascript",
    difficulty: "easy",
    question: "Comment obtenir la longueur d'une chaîne de caractères en JavaScript ?",
    options: [
      "string.length",
      "string.count()",
      "string.size()",
      "strlen(string)"
    ],
    correctAnswer: 0,
    explanation: "La propriété length retourne le nombre de caractères dans une chaîne.",
    points: 1,
    tags: ["string", "properties"]
  },
  {
    id: "js-007",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle est la fonction JavaScript utilisée pour convertir une chaîne en minuscules ?",
    options: [
      "toLowerCase()",
      "toLower()",
      "lowerCase()",
      "changeCaseToLower()"
    ],
    correctAnswer: 0,
    explanation: "La méthode toLowerCase() convertit tous les caractères d'une chaîne en minuscules.",
    points: 1,
    tags: ["string", "methods"]
  },
  {
    id: "js-008",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle est la fonction JavaScript utilisée pour arrondir un nombre à l'entier le plus proche ?",
    options: [
      "Math.round()",
      "Math.ceil()",
      "Math.floor()",
      "toInt()"
    ],
    correctAnswer: 0,
    explanation: "Math.round() arrondit un nombre à l'entier le plus proche.",
    points: 2,
    tags: ["math", "methods"]
  },
  {
    id: "js-009",
    category: "javascript",
    difficulty: "medium",
    question: "Quel est le résultat de l'opération `10 % 3` en JavaScript ?",
    options: [
      "1",
      "3",
      "0",
      "2"
    ],
    correctAnswer: 0,
    explanation: "L'opérateur modulo % retourne le reste de la division, donc 10 % 3 = 1.",
    points: 2,
    tags: ["operators", "arithmetic"]
  },
  {
    id: "js-010",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle méthode JavaScript est utilisée pour concaténer deux tableaux ?",
    options: [
      "concat()",
      "combine()",
      "merge()",
      "join()"
    ],
    correctAnswer: 0,
    explanation: "La méthode concat() fusionne deux ou plusieurs tableaux en un nouveau tableau.",
    points: 1,
    tags: ["array", "methods"]
  },
  {
    id: "js-011",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle est la fonction JavaScript utilisée pour générer un nombre aléatoire entre 0 et 1 ?",
    options: [
      "Math.random()",
      "generateRandom()",
      "randomNumber()",
      "rand()"
    ],
    correctAnswer: 0,
    explanation: "Math.random() génère un nombre pseudo-aléatoire entre 0 (inclus) et 1 (exclus).",
    points: 2,
    tags: ["math", "random"]
  },
  {
    id: "js-012",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle méthode JavaScript est utilisée pour supprimer un élément d'un tableau à une position donnée ?",
    options: [
      "splice()",
      "delete()",
      "removeAt()",
      "removeFrom()"
    ],
    correctAnswer: 0,
    explanation: "La méthode splice() modifie le contenu d'un tableau en retirant ou remplaçant des éléments.",
    points: 2,
    tags: ["array", "methods"]
  },
  {
    id: "js-013",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle est la fonction JavaScript utilisée pour convertir une chaîne en majuscules ?",
    options: [
      "toUpperCase()",
      "upperCase()",
      "makeUpperCase()",
      "changeCaseToUpper()"
    ],
    correctAnswer: 0,
    explanation: "La méthode toUpperCase() convertit tous les caractères d'une chaîne en majuscules.",
    points: 1,
    tags: ["string", "methods"]
  },
  {
    id: "js-014",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle est la méthode JavaScript utilisée pour inverser l'ordre des éléments dans un tableau ?",
    options: [
      "reverse()",
      "invert()",
      "flip()",
      "switch()"
    ],
    correctAnswer: 0,
    explanation: "La méthode reverse() inverse l'ordre des éléments d'un tableau en place.",
    points: 1,
    tags: ["array", "methods"]
  },
  {
    id: "js-015",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle méthode JavaScript est utilisée pour diviser une chaîne en un tableau de sous-chaînes ?",
    options: [
      "split()",
      "divide()",
      "separate()",
      "slice()"
    ],
    correctAnswer: 0,
    explanation: "La méthode split() divise une chaîne en tableau de sous-chaînes selon un séparateur.",
    points: 2,
    tags: ["string", "array", "methods"]
  },
  {
    id: "js-016",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle est la valeur de l'expression `true && false` en JavaScript ?",
    options: [
      "false",
      "true",
      "null",
      "erreur"
    ],
    correctAnswer: 0,
    explanation: "L'opérateur logique && retourne true seulement si les deux opérandes sont true.",
    points: 2,
    tags: ["operators", "logical"]
  },
  {
    id: "js-017",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle est la méthode JavaScript utilisée pour vérifier si un élément existe dans un tableau ?",
    options: [
      "includes()",
      "contains()",
      "check()",
      "exists()"
    ],
    correctAnswer: 0,
    explanation: "La méthode includes() détermine si un tableau contient une valeur et retourne true ou false.",
    points: 2,
    tags: ["array", "methods"]
  },
  {
    id: "js-018",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle est la fonction JavaScript utilisée pour convertir une chaîne en nombre entier ?",
    options: [
      "parseInt()",
      "toInt()",
      "convertToInt()",
      "strToInt()"
    ],
    correctAnswer: 0,
    explanation: "parseInt() analyse une chaîne et retourne un nombre entier.",
    points: 2,
    tags: ["conversion", "number"]
  },
  {
    id: "js-019",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle méthode JavaScript est utilisée pour trier les éléments d'un tableau ?",
    options: [
      "sort()",
      "order()",
      "arrange()",
      "organize()"
    ],
    correctAnswer: 0,
    explanation: "La méthode sort() trie les éléments d'un tableau en place.",
    points: 1,
    tags: ["array", "methods"]
  },
  {
    id: "js-020",
    category: "javascript",
    difficulty: "hard",
    question: "Quelle est la valeur de l'expression `2 + '2'` en JavaScript ?",
    options: [
      "'22'",
      "22",
      "4",
      "'4'"
    ],
    correctAnswer: 0,
    explanation: "L'opérateur + avec une chaîne effectue une concaténation, donc 2 + '2' = '22'.",
    points: 3,
    tags: ["operators", "type-coercion"]
  },
  // Questions supplémentaires (21-50)
  {
    id: "js-021",
    category: "javascript",
    difficulty: "easy",
    question: "Comment déclarer une constante en JavaScript ?",
    options: [
      "const maVariable = 5",
      "constant maVariable = 5",
      "define maVariable = 5",
      "let constant maVariable = 5"
    ],
    correctAnswer: 0,
    explanation: "On utilise le mot-clé 'const' pour déclarer une constante qui ne peut pas être réassignée.",
    points: 1,
    tags: ["variables", "const"]
  },
  {
    id: "js-022",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle méthode permet de convertir une chaîne en majuscules ?",
    options: [
      "toUpperCase()",
      "upper()",
      "capitalize()",
      "toUpper()"
    ],
    correctAnswer: 0,
    explanation: "La méthode toUpperCase() convertit tous les caractères d'une chaîne en majuscules.",
    points: 1,
    tags: ["string", "methods"]
  },
  {
    id: "js-023",
    category: "javascript",
    difficulty: "easy",
    question: "Comment vérifier si une variable est un tableau ?",
    options: [
      "Array.isArray(variable)",
      "variable.isArray()",
      "typeof variable === 'array'",
      "variable instanceof Array"
    ],
    correctAnswer: 0,
    explanation: "Array.isArray() est la méthode recommandée pour vérifier si une valeur est un tableau.",
    points: 1,
    tags: ["array", "type-checking"]
  },
  {
    id: "js-024",
    category: "javascript",
    difficulty: "easy",
    question: "Quelle est la valeur de `Boolean(0)` ?",
    options: [
      "false",
      "true",
      "0",
      "undefined"
    ],
    correctAnswer: 0,
    explanation: "0 est une valeur falsy en JavaScript, donc Boolean(0) retourne false.",
    points: 1,
    tags: ["boolean", "type-conversion"]
  },
  {
    id: "js-025",
    category: "javascript",
    difficulty: "easy",
    question: "Comment arrondir un nombre à l'entier le plus proche ?",
    options: [
      "Math.round()",
      "Math.floor()",
      "Math.ceil()",
      "Math.nearest()"
    ],
    correctAnswer: 0,
    explanation: "Math.round() arrondit un nombre à l'entier le plus proche.",
    points: 1,
    tags: ["math", "methods"]
  },
  {
    id: "js-026",
    category: "javascript",
    difficulty: "medium",
    question: "Que retourne `typeof null` en JavaScript ?",
    options: [
      "'object'",
      "'null'",
      "'undefined'",
      "'number'"
    ],
    correctAnswer: 0,
    explanation: "C'est un bug historique de JavaScript : typeof null retourne 'object' au lieu de 'null'.",
    points: 2,
    tags: ["typeof", "null", "quirks"]
  },
  {
    id: "js-027",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle méthode permet de fusionner deux tableaux ?",
    options: [
      "concat()",
      "merge()",
      "join()",
      "combine()"
    ],
    correctAnswer: 0,
    explanation: "La méthode concat() fusionne deux ou plusieurs tableaux et retourne un nouveau tableau.",
    points: 2,
    tags: ["array", "methods"]
  },
  {
    id: "js-028",
    category: "javascript",
    difficulty: "medium",
    question: "Qu'est-ce qu'une fonction fléchée (arrow function) ?",
    options: [
      "Une syntaxe courte pour déclarer des fonctions",
      "Une fonction qui retourne toujours une flèche",
      "Une fonction qui ne peut pas avoir de paramètres",
      "Une fonction asynchrone"
    ],
    correctAnswer: 0,
    explanation: "Les arrow functions (=>) offrent une syntaxe plus concise et n'ont pas leur propre 'this'.",
    points: 2,
    tags: ["functions", "es6"]
  },
  {
    id: "js-029",
    category: "javascript",
    difficulty: "medium",
    question: "Que fait la méthode `filter()` ?",
    options: [
      "Crée un nouveau tableau avec les éléments qui passent un test",
      "Modifie le tableau original en supprimant des éléments",
      "Trie le tableau par ordre croissant",
      "Retourne le premier élément qui correspond"
    ],
    correctAnswer: 0,
    explanation: "filter() crée un nouveau tableau contenant tous les éléments qui passent le test de la fonction callback.",
    points: 2,
    tags: ["array", "methods", "functional"]
  },
  {
    id: "js-030",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle est la différence entre `==` et `===` ?",
    options: [
      "=== compare valeur et type, == compare seulement la valeur",
      "== compare valeur et type, === compare seulement la valeur",
      "Aucune différence",
      "=== est plus lent que =="
    ],
    correctAnswer: 0,
    explanation: "L'opérateur === (strict equality) compare à la fois la valeur et le type, tandis que == effectue une conversion de type avant la comparaison.",
    points: 2,
    tags: ["operators", "comparison"]
  },
  {
    id: "js-031",
    category: "javascript",
    difficulty: "medium",
    question: "Qu'est-ce que le hoisting en JavaScript ?",
    options: [
      "Le déplacement des déclarations en haut du scope",
      "Une méthode pour optimiser le code",
      "Un moyen de créer des variables globales",
      "Une technique de tri de tableau"
    ],
    correctAnswer: 0,
    explanation: "Le hoisting est un comportement où les déclarations (var, function) sont déplacées en haut de leur scope lors de la compilation.",
    points: 2,
    tags: ["scope", "hoisting"]
  },
  {
    id: "js-032",
    category: "javascript",
    difficulty: "medium",
    question: "Que fait `JSON.parse()` ?",
    options: [
      "Convertit une chaîne JSON en objet JavaScript",
      "Convertit un objet JavaScript en chaîne JSON",
      "Valide une chaîne JSON",
      "Formate une chaîne JSON"
    ],
    correctAnswer: 0,
    explanation: "JSON.parse() analyse une chaîne JSON et la convertit en valeur ou objet JavaScript.",
    points: 2,
    tags: ["json", "parsing"]
  },
  {
    id: "js-033",
    category: "javascript",
    difficulty: "medium",
    question: "Comment créer une copie superficielle d'un objet ?",
    options: [
      "{ ...objet }",
      "objet.copy()",
      "Object.clone(objet)",
      "objet.duplicate()"
    ],
    correctAnswer: 0,
    explanation: "L'opérateur spread (...) ou Object.assign() permettent de créer une copie superficielle d'un objet.",
    points: 2,
    tags: ["objects", "spread", "es6"]
  },
  {
    id: "js-034",
    category: "javascript",
    difficulty: "medium",
    question: "Quelle méthode permet d'exécuter une fonction après un délai ?",
    options: [
      "setTimeout()",
      "delay()",
      "wait()",
      "sleep()"
    ],
    correctAnswer: 0,
    explanation: "setTimeout() exécute une fonction après un délai spécifié en millisecondes.",
    points: 2,
    tags: ["async", "timing"]
  },
  {
    id: "js-035",
    category: "javascript",
    difficulty: "medium",
    question: "Que retourne `[1, 2, 3].map(x => x * 2)` ?",
    options: [
      "[2, 4, 6]",
      "[1, 2, 3]",
      "6",
      "[1, 4, 9]"
    ],
    correctAnswer: 0,
    explanation: "map() crée un nouveau tableau en appliquant la fonction à chaque élément. Ici, chaque nombre est multiplié par 2.",
    points: 2,
    tags: ["array", "map", "functional"]
  },
  {
    id: "js-036",
    category: "javascript",
    difficulty: "hard",
    question: "Qu'est-ce qu'une closure en JavaScript ?",
    options: [
      "Une fonction qui a accès aux variables de sa portée externe",
      "Une méthode pour fermer une fenêtre",
      "Un type de boucle",
      "Une classe fermée"
    ],
    correctAnswer: 0,
    explanation: "Une closure est une fonction qui conserve l'accès aux variables de sa portée lexicale externe, même après que cette portée soit terminée.",
    points: 3,
    tags: ["functions", "scope", "closures"]
  },
  {
    id: "js-037",
    category: "javascript",
    difficulty: "hard",
    question: "Que fait `Promise.all()` ?",
    options: [
      "Attend que toutes les promesses soient résolues",
      "Exécute toutes les promesses en parallèle",
      "Retourne la première promesse résolue",
      "Annule toutes les promesses"
    ],
    correctAnswer: 0,
    explanation: "Promise.all() prend un itérable de promesses et retourne une promesse qui se résout quand toutes les promesses sont résolues.",
    points: 3,
    tags: ["promises", "async"]
  },
  {
    id: "js-038",
    category: "javascript",
    difficulty: "hard",
    question: "Quelle est la valeur de `0.1 + 0.2 === 0.3` ?",
    options: [
      "false",
      "true",
      "undefined",
      "NaN"
    ],
    correctAnswer: 0,
    explanation: "À cause de la précision des nombres flottants, 0.1 + 0.2 donne 0.30000000000000004, donc la comparaison est false.",
    points: 3,
    tags: ["numbers", "floating-point", "quirks"]
  },
  {
    id: "js-039",
    category: "javascript",
    difficulty: "hard",
    question: "Qu'est-ce que l'event bubbling ?",
    options: [
      "La propagation d'un événement de l'élément enfant vers le parent",
      "L'animation d'une bulle sur la page",
      "Une méthode pour trier des événements",
      "Un type d'événement spécial"
    ],
    correctAnswer: 0,
    explanation: "L'event bubbling est la propagation d'un événement du DOM de l'élément cible vers ses ancêtres.",
    points: 3,
    tags: ["events", "dom"]
  },
  {
    id: "js-040",
    category: "javascript",
    difficulty: "hard",
    question: "Que fait l'opérateur `??` (nullish coalescing) ?",
    options: [
      "Retourne le premier opérande s'il n'est pas null/undefined",
      "Vérifie si une valeur est null",
      "Convertit null en 0",
      "Concatène deux valeurs"
    ],
    correctAnswer: 0,
    explanation: "L'opérateur ?? retourne l'opérande de droite si celui de gauche est null ou undefined, sinon il retourne l'opérande de gauche.",
    points: 3,
    tags: ["operators", "es2020"]
  },
  {
    id: "js-041",
    category: "javascript",
    difficulty: "hard",
    question: "Qu'est-ce que le destructuring ?",
    options: [
      "Une syntaxe pour extraire des valeurs d'objets ou tableaux",
      "Une méthode pour détruire des objets",
      "Un moyen de supprimer des propriétés",
      "Une technique d'optimisation"
    ],
    correctAnswer: 0,
    explanation: "Le destructuring permet d'extraire des valeurs d'objets ou tableaux dans des variables distinctes avec une syntaxe concise.",
    points: 3,
    tags: ["destructuring", "es6"]
  },
  {
    id: "js-042",
    category: "javascript",
    difficulty: "hard",
    question: "Quelle est la différence entre `call()` et `apply()` ?",
    options: [
      "apply() prend un tableau d'arguments, call() les prend individuellement",
      "call() prend un tableau, apply() les prend individuellement",
      "Aucune différence",
      "apply() est asynchrone"
    ],
    correctAnswer: 0,
    explanation: "call() et apply() permettent d'appeler une fonction avec un contexte 'this' spécifique, mais apply() prend les arguments sous forme de tableau.",
    points: 3,
    tags: ["functions", "this", "methods"]
  },
  {
    id: "js-043",
    category: "javascript",
    difficulty: "hard",
    question: "Qu'est-ce qu'un WeakMap ?",
    options: [
      "Une collection de paires clé-valeur où les clés sont des objets faiblement référencés",
      "Une Map avec moins de fonctionnalités",
      "Une Map qui stocke des valeurs faibles",
      "Une Map temporaire"
    ],
    correctAnswer: 0,
    explanation: "Un WeakMap est une collection où les clés doivent être des objets et sont faiblement référencées, permettant le garbage collection.",
    points: 3,
    tags: ["weakmap", "memory", "advanced"]
  },
  {
    id: "js-044",
    category: "javascript",
    difficulty: "hard",
    question: "Que fait `Object.freeze()` ?",
    options: [
      "Empêche la modification d'un objet",
      "Convertit un objet en JSON",
      "Clone un objet",
      "Supprime toutes les propriétés"
    ],
    correctAnswer: 0,
    explanation: "Object.freeze() gèle un objet, empêchant l'ajout, la suppression ou la modification de ses propriétés.",
    points: 3,
    tags: ["objects", "immutability"]
  },
  {
    id: "js-045",
    category: "javascript",
    difficulty: "hard",
    question: "Qu'est-ce qu'une fonction générique (generator) ?",
    options: [
      "Une fonction qui peut être mise en pause et reprise",
      "Une fonction qui génère d'autres fonctions",
      "Une fonction qui crée des objets",
      "Une fonction asynchrone"
    ],
    correctAnswer: 0,
    explanation: "Une fonction generator (function*) peut être mise en pause avec 'yield' et reprise, permettant la génération de séquences de valeurs.",
    points: 3,
    tags: ["generators", "advanced"]
  },
  {
    id: "js-046",
    category: "javascript",
    difficulty: "hard",
    question: "Quelle est la valeur de `[] + []` ?",
    options: [
      "''",
      "[]",
      "undefined",
      "0"
    ],
    correctAnswer: 0,
    explanation: "Quand deux tableaux sont additionnés, ils sont convertis en chaînes vides, donc '' + '' = ''.",
    points: 3,
    tags: ["operators", "type-coercion", "quirks"]
  },
  {
    id: "js-047",
    category: "javascript",
    difficulty: "hard",
    question: "Qu'est-ce que le 'event loop' ?",
    options: [
      "Le mécanisme qui gère l'exécution asynchrone en JavaScript",
      "Une boucle infinie d'événements",
      "Un type de boucle for spécial",
      "Une méthode pour écouter des événements"
    ],
    correctAnswer: 0,
    explanation: "L'event loop est le mécanisme qui permet à JavaScript d'exécuter du code asynchrone en gérant la pile d'exécution et la file des callbacks.",
    points: 3,
    tags: ["async", "event-loop", "advanced"]
  },
  {
    id: "js-048",
    category: "javascript",
    difficulty: "hard",
    question: "Que fait `Object.create()` ?",
    options: [
      "Crée un nouvel objet avec un prototype spécifique",
      "Clone un objet existant",
      "Crée un objet vide",
      "Convertit une valeur en objet"
    ],
    correctAnswer: 0,
    explanation: "Object.create() crée un nouvel objet en utilisant un objet existant comme prototype du nouvel objet.",
    points: 3,
    tags: ["objects", "prototype", "advanced"]
  },
  {
    id: "js-049",
    category: "javascript",
    difficulty: "hard",
    question: "Qu'est-ce qu'un Proxy en JavaScript ?",
    options: [
      "Un objet qui intercepte et personnalise les opérations sur un autre objet",
      "Un serveur intermédiaire",
      "Une copie d'un objet",
      "Un type de fonction"
    ],
    correctAnswer: 0,
    explanation: "Un Proxy permet d'intercepter et de redéfinir les opérations fondamentales d'un objet (lecture, écriture, etc.).",
    points: 3,
    tags: ["proxy", "meta-programming", "advanced"]
  },
  {
    id: "js-050",
    category: "javascript",
    difficulty: "hard",
    question: "Quelle est la différence entre `setInterval()` et `setTimeout()` ?",
    options: [
      "setInterval() répète l'exécution, setTimeout() l'exécute une fois",
      "setTimeout() répète, setInterval() exécute une fois",
      "Aucune différence",
      "setInterval() est plus rapide"
    ],
    correctAnswer: 0,
    explanation: "setTimeout() exécute une fonction après un délai, tandis que setInterval() l'exécute répétitivement à intervalles réguliers.",
    points: 3,
    tags: ["timing", "async"]
  }
];
