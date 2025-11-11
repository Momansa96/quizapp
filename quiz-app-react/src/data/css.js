export const cssQuestions = [
  // Questions Faciles (1-10)
  {
    id: "css-001",
    category: "css",
    difficulty: "easy",
    question: "Comment changer la couleur du texte en CSS ?",
    options: [
      "color: red;",
      "text-color: red;",
      "font-color: red;",
      "text: red;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'color' est utilisée pour définir la couleur du texte.",
    points: 1,
    tags: ["color", "basics"]
  },
  {
    id: "css-002",
    category: "css",
    difficulty: "easy",
    question: "Comment centrer un texte horizontalement ?",
    options: [
      "text-align: center;",
      "align: center;",
      "center: true;",
      "horizontal-align: center;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'text-align: center' centre le texte horizontalement dans son conteneur.",
    points: 1,
    tags: ["alignment", "text"]
  },
  {
    id: "css-003",
    category: "css",
    difficulty: "easy",
    question: "Comment changer la taille de la police ?",
    options: [
      "font-size: 16px;",
      "text-size: 16px;",
      "size: 16px;",
      "font: 16px;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'font-size' définit la taille de la police de caractères.",
    points: 1,
    tags: ["typography", "basics"]
  },
  {
    id: "css-004",
    category: "css",
    difficulty: "easy",
    question: "Comment ajouter une marge externe autour d'un élément ?",
    options: [
      "margin: 10px;",
      "padding: 10px;",
      "spacing: 10px;",
      "gap: 10px;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'margin' crée un espace externe autour de l'élément.",
    points: 1,
    tags: ["spacing", "box-model"]
  },
  {
    id: "css-005",
    category: "css",
    difficulty: "easy",
    question: "Comment masquer un élément en CSS ?",
    options: [
      "display: none;",
      "visibility: hidden;",
      "hide: true;",
      "show: false;"
    ],
    correctAnswer: 0,
    explanation: "'display: none' supprime complètement l'élément du flux du document.",
    points: 1,
    tags: ["display", "visibility"]
  },
  {
    id: "css-006",
    category: "css",
    difficulty: "easy",
    question: "Comment changer la couleur de fond ?",
    options: [
      "background-color: blue;",
      "bg-color: blue;",
      "color-background: blue;",
      "back-color: blue;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'background-color' définit la couleur d'arrière-plan d'un élément.",
    points: 1,
    tags: ["background", "color"]
  },
  {
    id: "css-007",
    category: "css",
    difficulty: "easy",
    question: "Comment ajouter une bordure ?",
    options: [
      "border: 1px solid black;",
      "outline: 1px solid black;",
      "frame: 1px solid black;",
      "edge: 1px solid black;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'border' définit une bordure autour d'un élément avec largeur, style et couleur.",
    points: 1,
    tags: ["border", "basics"]
  },
  {
    id: "css-008",
    category: "css",
    difficulty: "easy",
    question: "Comment mettre du texte en gras ?",
    options: [
      "font-weight: bold;",
      "text-weight: bold;",
      "bold: true;",
      "weight: bold;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'font-weight: bold' rend le texte gras.",
    points: 1,
    tags: ["typography", "text"]
  },
  {
    id: "css-009",
    category: "css",
    difficulty: "easy",
    question: "Comment changer le curseur au survol ?",
    options: [
      "cursor: pointer;",
      "mouse: pointer;",
      "pointer: cursor;",
      "hover: pointer;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'cursor' change l'apparence du curseur quand il survole l'élément.",
    points: 1,
    tags: ["cursor", "interaction"]
  },
  {
    id: "css-010",
    category: "css",
    difficulty: "easy",
    question: "Comment arrondir les coins d'un élément ?",
    options: [
      "border-radius: 10px;",
      "corner-radius: 10px;",
      "round-corners: 10px;",
      "radius: 10px;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'border-radius' arrondit les coins d'un élément.",
    points: 1,
    tags: ["border", "styling"]
  },
  // Questions Moyennes (11-20)
  {
    id: "css-011",
    category: "css",
    difficulty: "medium",
    question: "Quelle est la différence entre 'display: none' et 'visibility: hidden' ?",
    options: [
      "'display: none' supprime l'élément du flux, 'visibility: hidden' conserve l'espace",
      "Aucune différence",
      "'visibility: hidden' supprime l'élément",
      "'display: none' rend l'élément transparent"
    ],
    correctAnswer: 0,
    explanation: "'display: none' supprime complètement l'élément, tandis que 'visibility: hidden' le cache mais conserve son espace.",
    points: 2,
    tags: ["display", "visibility"]
  },
  {
    id: "css-012",
    category: "css",
    difficulty: "medium",
    question: "Comment créer une disposition Flexbox ?",
    options: [
      "display: flex;",
      "layout: flex;",
      "flex: true;",
      "flexbox: on;"
    ],
    correctAnswer: 0,
    explanation: "'display: flex' active le modèle de disposition Flexbox sur un conteneur.",
    points: 2,
    tags: ["flexbox", "layout"]
  },
  {
    id: "css-013",
    category: "css",
    difficulty: "medium",
    question: "Comment sélectionner tous les éléments enfants directs ?",
    options: [
      "parent > child",
      "parent child",
      "parent >> child",
      "parent / child"
    ],
    correctAnswer: 0,
    explanation: "Le sélecteur '>' cible uniquement les enfants directs d'un élément.",
    points: 2,
    tags: ["selectors", "css"]
  },
  {
    id: "css-014",
    category: "css",
    difficulty: "medium",
    question: "Quelle propriété contrôle l'ordre d'empilement des éléments ?",
    options: [
      "z-index",
      "layer",
      "stack",
      "depth"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'z-index' contrôle l'ordre d'empilement des éléments positionnés.",
    points: 2,
    tags: ["positioning", "z-index"]
  },
  {
    id: "css-015",
    category: "css",
    difficulty: "medium",
    question: "Comment créer une transition CSS ?",
    options: [
      "transition: all 0.3s ease;",
      "animate: all 0.3s;",
      "transform: all 0.3s;",
      "effect: transition 0.3s;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'transition' définit les animations de transition entre les états.",
    points: 2,
    tags: ["transitions", "animations"]
  },
  {
    id: "css-016",
    category: "css",
    difficulty: "medium",
    question: "Quelle propriété CSS Grid définit les colonnes ?",
    options: [
      "grid-template-columns",
      "columns",
      "grid-columns",
      "template-columns"
    ],
    correctAnswer: 0,
    explanation: "'grid-template-columns' définit le nombre et la taille des colonnes dans une grille CSS.",
    points: 2,
    tags: ["grid", "layout"]
  },
  {
    id: "css-017",
    category: "css",
    difficulty: "medium",
    question: "Comment rendre un élément transparent ?",
    options: [
      "opacity: 0.5;",
      "transparent: 50%;",
      "alpha: 0.5;",
      "visibility: 0.5;"
    ],
    correctAnswer: 0,
    explanation: "La propriété 'opacity' définit la transparence d'un élément (0 = transparent, 1 = opaque).",
    points: 2,
    tags: ["opacity", "styling"]
  },
  {
    id: "css-018",
    category: "css",
    difficulty: "medium",
    question: "Comment sélectionner le premier enfant ?",
    options: [
      ":first-child",
      ":first",
      ":child(1)",
      ":nth-child(1)"
    ],
    correctAnswer: 0,
    explanation: "Le pseudo-sélecteur ':first-child' cible le premier élément enfant de son parent.",
    points: 2,
    tags: ["selectors", "pseudo-classes"]
  },
  {
    id: "css-019",
    category: "css",
    difficulty: "medium",
    question: "Quelle unité est relative à la taille de la police de l'élément parent ?",
    options: [
      "em",
      "px",
      "rem",
      "pt"
    ],
    correctAnswer: 0,
    explanation: "L'unité 'em' est relative à la taille de police de l'élément parent.",
    points: 2,
    tags: ["units", "typography"]
  },
  {
    id: "css-020",
    category: "css",
    difficulty: "medium",
    question: "Comment créer une ombre portée ?",
    options: [
      "box-shadow: 2px 2px 5px rgba(0,0,0,0.3);",
      "shadow: 2px 2px 5px black;",
      "drop-shadow: 2px 2px 5px;",
      "element-shadow: 2px 2px;"
    ],
    correctAnswer: 0,
    explanation: "'box-shadow' crée une ombre portée autour d'un élément avec décalage, flou et couleur.",
    points: 2,
    tags: ["effects", "shadow"]
  },
  // Questions Difficiles (21-30)
  {
    id: "css-021",
    category: "css",
    difficulty: "hard",
    question: "Qu'est-ce que la spécificité CSS ?",
    options: [
      "Le poids d'un sélecteur qui détermine quelle règle est appliquée",
      "La vitesse d'application des styles",
      "Le nombre de propriétés CSS",
      "L'ordre des fichiers CSS"
    ],
    correctAnswer: 0,
    explanation: "La spécificité détermine quelle règle CSS s'applique quand plusieurs règles ciblent le même élément.",
    points: 3,
    tags: ["specificity", "advanced"]
  },
  {
    id: "css-022",
    category: "css",
    difficulty: "hard",
    question: "Quelle propriété contrôle le modèle de boîte utilisé ?",
    options: [
      "box-sizing",
      "box-model",
      "sizing-model",
      "content-box"
    ],
    correctAnswer: 0,
    explanation: "'box-sizing: border-box' inclut padding et border dans la largeur totale.",
    points: 3,
    tags: ["box-model", "sizing"]
  },
  {
    id: "css-023",
    category: "css",
    difficulty: "hard",
    question: "Comment créer une variable CSS personnalisée ?",
    options: [
      "--ma-variable: valeur;",
      "$ma-variable: valeur;",
      "@ma-variable: valeur;",
      "var ma-variable: valeur;"
    ],
    correctAnswer: 0,
    explanation: "Les variables CSS (custom properties) sont définies avec '--' et utilisées avec var().",
    points: 3,
    tags: ["variables", "custom-properties"]
  },
  {
    id: "css-024",
    category: "css",
    difficulty: "hard",
    question: "Qu'est-ce qu'un contexte de formatage de bloc (BFC) ?",
    options: [
      "Une région où les éléments de bloc sont disposés selon certaines règles",
      "Un type de sélecteur CSS",
      "Une propriété de positionnement",
      "Un format d'image"
    ],
    correctAnswer: 0,
    explanation: "Un BFC est une région du document où les éléments blocs suivent des règles de mise en page spécifiques.",
    points: 3,
    tags: ["layout", "bfc", "advanced"]
  },
  {
    id: "css-025",
    category: "css",
    difficulty: "hard",
    question: "Comment créer un dégradé linéaire en CSS ?",
    options: [
      "background: linear-gradient(to right, red, blue);",
      "background: gradient(red, blue);",
      "color: linear(red, blue);",
      "gradient: linear red blue;"
    ],
    correctAnswer: 0,
    explanation: "'linear-gradient()' crée un dégradé progressif entre plusieurs couleurs le long d'une ligne.",
    points: 3,
    tags: ["gradients", "background"]
  },
  {
    id: "css-026",
    category: "css",
    difficulty: "hard",
    question: "Quelle propriété contrôle le comportement de défilement snap ?",
    options: [
      "scroll-snap-type",
      "snap-scroll",
      "scroll-behavior",
      "snap-points"
    ],
    correctAnswer: 0,
    explanation: "'scroll-snap-type' définit comment le défilement s'aligne sur des points d'accrochage.",
    points: 3,
    tags: ["scroll", "snap", "advanced"]
  },
  {
    id: "css-027",
    category: "css",
    difficulty: "hard",
    question: "Comment appliquer un style au survol d'un élément parent ?",
    options: [
      "parent:hover child { }",
      "parent hover child { }",
      "parent > child:hover { }",
      "child:parent-hover { }"
    ],
    correctAnswer: 0,
    explanation: "On utilise 'parent:hover child' pour styler l'enfant quand le parent est survolé.",
    points: 3,
    tags: ["selectors", "hover", "advanced"]
  },
  {
    id: "css-028",
    category: "css",
    difficulty: "hard",
    question: "Qu'est-ce que le 'stacking context' ?",
    options: [
      "Un environnement 3D qui détermine l'ordre d'empilement",
      "Un type de flexbox",
      "Une propriété de grid",
      "Un mode de positionnement"
    ],
    correctAnswer: 0,
    explanation: "Un stacking context crée un environnement d'empilement 3D indépendant pour le z-index.",
    points: 3,
    tags: ["z-index", "stacking", "advanced"]
  },
  {
    id: "css-029",
    category: "css",
    difficulty: "hard",
    question: "Comment créer un effet de backdrop blur ?",
    options: [
      "backdrop-filter: blur(10px);",
      "background-blur: 10px;",
      "filter: blur(10px);",
      "blur: backdrop 10px;"
    ],
    correctAnswer: 0,
    explanation: "'backdrop-filter: blur()' applique un flou à l'arrière-plan d'un élément.",
    points: 3,
    tags: ["filters", "effects", "advanced"]
  },
  {
    id: "css-030",
    category: "css",
    difficulty: "hard",
    question: "Quelle est la différence entre 'rem' et 'em' ?",
    options: [
      "'rem' est relatif à la racine, 'em' à l'élément parent",
      "'em' est relatif à la racine, 'rem' au parent",
      "Aucune différence",
      "'rem' est pour mobile, 'em' pour desktop"
    ],
    correctAnswer: 0,
    explanation: "'rem' (root em) est relatif à la taille de police de l'élément racine, 'em' au parent direct.",
    points: 3,
    tags: ["units", "typography", "advanced"]
  }
];
