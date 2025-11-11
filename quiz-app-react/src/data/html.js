export const htmlQuestions = [
  // Questions Faciles (1-10)
  {
    id: "html-001",
    category: "html",
    difficulty: "easy",
    question: "Quelle balise HTML est utilisée pour créer un lien hypertexte ?",
    options: [
      "<a>",
      "<link>",
      "<href>",
      "<url>"
    ],
    correctAnswer: 0,
    explanation: "La balise <a> (anchor) est utilisée pour créer des liens hypertextes avec l'attribut href.",
    points: 1,
    tags: ["links", "basics"]
  },
  {
    id: "html-002",
    category: "html",
    difficulty: "easy",
    question: "Quelle balise est utilisée pour définir un titre de niveau 1 ?",
    options: [
      "<h1>",
      "<heading>",
      "<title>",
      "<header>"
    ],
    correctAnswer: 0,
    explanation: "La balise <h1> définit le titre de niveau 1, le plus important dans la hiérarchie des titres.",
    points: 1,
    tags: ["headings", "basics"]
  },
  {
    id: "html-003",
    category: "html",
    difficulty: "easy",
    question: "Comment insérer une image en HTML ?",
    options: [
      "<img src='image.jpg' alt='description'>",
      "<image src='image.jpg'>",
      "<picture>image.jpg</picture>",
      "<photo src='image.jpg'>"
    ],
    correctAnswer: 0,
    explanation: "La balise <img> avec l'attribut src pour la source et alt pour la description alternative permet d'insérer une image.",
    points: 1,
    tags: ["images", "basics"]
  },
  {
    id: "html-004",
    category: "html",
    difficulty: "easy",
    question: "Quelle balise HTML crée un paragraphe ?",
    options: [
      "<p>",
      "<paragraph>",
      "<text>",
      "<para>"
    ],
    correctAnswer: 0,
    explanation: "La balise <p> est utilisée pour définir un paragraphe de texte.",
    points: 1,
    tags: ["text", "basics"]
  },
  {
    id: "html-005",
    category: "html",
    difficulty: "easy",
    question: "Quelle balise définit un retour à la ligne ?",
    options: [
      "<br>",
      "<break>",
      "<lb>",
      "<newline>"
    ],
    correctAnswer: 0,
    explanation: "La balise <br> (break) insère un saut de ligne sans créer un nouveau paragraphe.",
    points: 1,
    tags: ["formatting", "basics"]
  },
  {
    id: "html-006",
    category: "html",
    difficulty: "easy",
    question: "Quelle balise crée une liste non ordonnée ?",
    options: [
      "<ul>",
      "<ol>",
      "<list>",
      "<nl>"
    ],
    correctAnswer: 0,
    explanation: "La balise <ul> (unordered list) crée une liste à puces non numérotée.",
    points: 1,
    tags: ["lists", "basics"]
  },
  {
    id: "html-007",
    category: "html",
    difficulty: "easy",
    question: "Comment créer un bouton en HTML ?",
    options: [
      "<button>Cliquez ici</button>",
      "<btn>Cliquez ici</btn>",
      "<input type='button'>",
      "<clickable>Cliquez ici</clickable>"
    ],
    correctAnswer: 0,
    explanation: "La balise <button> est la méthode recommandée pour créer un bouton cliquable.",
    points: 1,
    tags: ["forms", "buttons"]
  },
  {
    id: "html-008",
    category: "html",
    difficulty: "easy",
    question: "Quelle balise définit le corps principal du document HTML ?",
    options: [
      "<body>",
      "<main>",
      "<content>",
      "<section>"
    ],
    correctAnswer: 0,
    explanation: "La balise <body> contient tout le contenu visible de la page HTML.",
    points: 1,
    tags: ["structure", "basics"]
  },
  {
    id: "html-009",
    category: "html",
    difficulty: "easy",
    question: "Comment créer un champ de saisie de texte ?",
    options: [
      "<input type='text'>",
      "<textfield>",
      "<text>",
      "<field type='text'>"
    ],
    correctAnswer: 0,
    explanation: "La balise <input> avec type='text' crée un champ de saisie de texte simple ligne.",
    points: 1,
    tags: ["forms", "input"]
  },
  {
    id: "html-010",
    category: "html",
    difficulty: "easy",
    question: "Quelle balise est utilisée pour mettre du texte en gras ?",
    options: [
      "<strong> ou <b>",
      "<bold>",
      "<fat>",
      "<emphasis>"
    ],
    correctAnswer: 0,
    explanation: "<strong> (importance sémantique) ou <b> (style visuel) permettent de mettre du texte en gras.",
    points: 1,
    tags: ["formatting", "text"]
  },
  // Questions Moyennes (11-20)
  {
    id: "html-011",
    category: "html",
    difficulty: "medium",
    question: "Quelle est la différence entre <div> et <span> ?",
    options: [
      "<div> est block, <span> est inline",
      "<span> est block, <div> est inline",
      "Aucune différence",
      "<div> est pour le texte, <span> pour les images"
    ],
    correctAnswer: 0,
    explanation: "<div> est un élément de bloc qui occupe toute la largeur, <span> est un élément inline qui ne prend que l'espace nécessaire.",
    points: 2,
    tags: ["elements", "display"]
  },
  {
    id: "html-012",
    category: "html",
    difficulty: "medium",
    question: "Quel attribut spécifie le document lié dans une balise <link> ?",
    options: [
      "href",
      "src",
      "link",
      "url"
    ],
    correctAnswer: 0,
    explanation: "L'attribut href (hypertext reference) spécifie l'URL du document lié, souvent utilisé pour les feuilles de style CSS.",
    points: 2,
    tags: ["attributes", "links"]
  },
  {
    id: "html-013",
    category: "html",
    difficulty: "medium",
    question: "Quelle balise sémantique définit le contenu principal ?",
    options: [
      "<main>",
      "<content>",
      "<primary>",
      "<body>"
    ],
    correctAnswer: 0,
    explanation: "La balise <main> représente le contenu principal dominant du document.",
    points: 2,
    tags: ["semantic", "structure"]
  },
  {
    id: "html-014",
    category: "html",
    difficulty: "medium",
    question: "Comment rendre un champ de formulaire obligatoire ?",
    options: [
      "Ajouter l'attribut 'required'",
      "Ajouter l'attribut 'mandatory'",
      "Ajouter l'attribut 'needed'",
      "Ajouter l'attribut 'force'"
    ],
    correctAnswer: 0,
    explanation: "L'attribut 'required' rend un champ obligatoire avant la soumission du formulaire.",
    points: 2,
    tags: ["forms", "validation"]
  },
  {
    id: "html-015",
    category: "html",
    difficulty: "medium",
    question: "Quelle balise crée un tableau en HTML ?",
    options: [
      "<table>",
      "<grid>",
      "<tab>",
      "<spreadsheet>"
    ],
    correctAnswer: 0,
    explanation: "La balise <table> définit un tableau HTML, avec <tr> pour les lignes et <td> pour les cellules.",
    points: 2,
    tags: ["tables", "structure"]
  },
  {
    id: "html-016",
    category: "html",
    difficulty: "medium",
    question: "Quel attribut définit un identifiant unique pour un élément ?",
    options: [
      "id",
      "class",
      "name",
      "key"
    ],
    correctAnswer: 0,
    explanation: "L'attribut 'id' définit un identifiant unique pour un élément dans le document.",
    points: 2,
    tags: ["attributes", "selectors"]
  },
  {
    id: "html-017",
    category: "html",
    difficulty: "medium",
    question: "Comment intégrer une vidéo en HTML5 ?",
    options: [
      "<video src='video.mp4' controls></video>",
      "<media src='video.mp4'>",
      "<movie src='video.mp4'>",
      "<player src='video.mp4'>"
    ],
    correctAnswer: 0,
    explanation: "La balise <video> avec l'attribut src et controls permet d'intégrer et contrôler une vidéo.",
    points: 2,
    tags: ["media", "html5"]
  },
  {
    id: "html-018",
    category: "html",
    difficulty: "medium",
    question: "Quelle balise définit une section de navigation ?",
    options: [
      "<nav>",
      "<navigation>",
      "<menu>",
      "<links>"
    ],
    correctAnswer: 0,
    explanation: "La balise sémantique <nav> représente une section contenant des liens de navigation.",
    points: 2,
    tags: ["semantic", "navigation"]
  },
  {
    id: "html-019",
    category: "html",
    difficulty: "medium",
    question: "Comment créer une liste de définitions ?",
    options: [
      "<dl> avec <dt> et <dd>",
      "<def> avec <term> et <desc>",
      "<list type='definition'>",
      "<glossary>"
    ],
    correctAnswer: 0,
    explanation: "<dl> (definition list) contient des termes <dt> et leurs descriptions <dd>.",
    points: 2,
    tags: ["lists", "semantic"]
  },
  {
    id: "html-020",
    category: "html",
    difficulty: "medium",
    question: "Quel attribut spécifie un texte alternatif pour une image ?",
    options: [
      "alt",
      "title",
      "description",
      "text"
    ],
    correctAnswer: 0,
    explanation: "L'attribut 'alt' fournit un texte alternatif pour l'accessibilité et quand l'image ne peut être affichée.",
    points: 2,
    tags: ["images", "accessibility"]
  },
  // Questions Difficiles (21-30)
  {
    id: "html-021",
    category: "html",
    difficulty: "hard",
    question: "Quelle balise permet d'intégrer du contenu externe (iframe) ?",
    options: [
      "<iframe>",
      "<frame>",
      "<embed>",
      "<external>"
    ],
    correctAnswer: 0,
    explanation: "La balise <iframe> permet d'intégrer un document HTML dans un autre document HTML.",
    points: 3,
    tags: ["embedding", "advanced"]
  },
  {
    id: "html-022",
    category: "html",
    difficulty: "hard",
    question: "Quelle est la différence entre <article> et <section> ?",
    options: [
      "<article> est autonome, <section> regroupe du contenu thématique",
      "<section> est autonome, <article> regroupe",
      "Aucune différence",
      "<article> est pour les blogs uniquement"
    ],
    correctAnswer: 0,
    explanation: "<article> représente un contenu indépendant et réutilisable, <section> regroupe du contenu thématiquement lié.",
    points: 3,
    tags: ["semantic", "structure"]
  },
  {
    id: "html-023",
    category: "html",
    difficulty: "hard",
    question: "Quel attribut permet de stocker des données personnalisées ?",
    options: [
      "data-*",
      "custom-*",
      "meta-*",
      "attr-*"
    ],
    correctAnswer: 0,
    explanation: "Les attributs data-* permettent de stocker des données personnalisées privées à la page ou à l'application.",
    points: 3,
    tags: ["attributes", "data"]
  },
  {
    id: "html-024",
    category: "html",
    difficulty: "hard",
    question: "Quelle balise définit le contenu qui doit être affiché si JavaScript est désactivé ?",
    options: [
      "<noscript>",
      "<nojs>",
      "<fallback>",
      "<alternative>"
    ],
    correctAnswer: 0,
    explanation: "La balise <noscript> contient du HTML alternatif affiché si les scripts sont désactivés.",
    points: 3,
    tags: ["scripting", "fallback"]
  },
  {
    id: "html-025",
    category: "html",
    difficulty: "hard",
    question: "Quel type d'input crée un sélecteur de couleur ?",
    options: [
      "type='color'",
      "type='colorpicker'",
      "type='palette'",
      "type='rgb'"
    ],
    correctAnswer: 0,
    explanation: "<input type='color'> crée un sélecteur de couleur natif dans HTML5.",
    points: 3,
    tags: ["forms", "html5", "input"]
  },
  {
    id: "html-026",
    category: "html",
    difficulty: "hard",
    question: "Quelle balise permet de créer un groupe de colonnes dans un tableau ?",
    options: [
      "<colgroup>",
      "<columns>",
      "<group>",
      "<col-container>"
    ],
    correctAnswer: 0,
    explanation: "La balise <colgroup> permet de regrouper des colonnes dans un tableau pour y appliquer des styles.",
    points: 3,
    tags: ["tables", "advanced"]
  },
  {
    id: "html-027",
    category: "html",
    difficulty: "hard",
    question: "Quel attribut rend un script asynchrone ?",
    options: [
      "async",
      "defer",
      "asynchronous",
      "parallel"
    ],
    correctAnswer: 0,
    explanation: "L'attribut 'async' sur une balise <script> charge et exécute le script de manière asynchrone.",
    points: 3,
    tags: ["scripting", "performance"]
  },
  {
    id: "html-028",
    category: "html",
    difficulty: "hard",
    question: "Quelle balise représente une barre de progression ?",
    options: [
      "<progress>",
      "<loading>",
      "<bar>",
      "<meter>"
    ],
    correctAnswer: 0,
    explanation: "La balise <progress> représente la progression d'une tâche (téléchargement, traitement, etc.).",
    points: 3,
    tags: ["html5", "ui"]
  },
  {
    id: "html-029",
    category: "html",
    difficulty: "hard",
    question: "Quel attribut sur <form> empêche la validation HTML5 ?",
    options: [
      "novalidate",
      "no-validation",
      "skip-validation",
      "disable-validation"
    ],
    correctAnswer: 0,
    explanation: "L'attribut 'novalidate' sur un formulaire désactive la validation HTML5 native.",
    points: 3,
    tags: ["forms", "validation"]
  },
  {
    id: "html-030",
    category: "html",
    difficulty: "hard",
    question: "Quelle balise permet de définir des métadonnées pour les moteurs de recherche ?",
    options: [
      "<meta>",
      "<metadata>",
      "<seo>",
      "<info>"
    ],
    correctAnswer: 0,
    explanation: "La balise <meta> dans <head> définit des métadonnées comme la description, les mots-clés, l'auteur, etc.",
    points: 3,
    tags: ["meta", "seo"]
  }
];
