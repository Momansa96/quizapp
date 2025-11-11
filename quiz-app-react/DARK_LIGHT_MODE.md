# 🌓 Dark/Light Mode - Documentation

## ✅ Fonctionnalités implémentées

### 1. ThemeContext avec persistance
**Fichier** : `src/context/ThemeContext.jsx`

- Provider React Context pour gérer le thème global
- État persisté dans `localStorage`
- Thème par défaut : **Dark**
- Hook personnalisé `useTheme()` pour accéder au thème

**Usage dans un composant** :
```jsx
import { useTheme } from '../context/ThemeContext';

function MyComponent() {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button onClick={toggleTheme}>
      Mode actuel : {theme}
    </button>
  );
}
```

---

### 2. ThemeToggle Switch Animé
**Fichiers** :
- `src/components/common/ThemeToggle.jsx`
- `src/components/common/ThemeToggle.module.css`

- Switch interactif avec emojis 🌙 / ☀️
- Animation smooth de transition
- Intégré dans le Header (en haut à droite)

---

### 3. Migration complète vers CSS Modules

Tous les composants utilisent maintenant **CSS Modules** :

| Composant | Fichier CSS | Status |
|-----------|-------------|--------|
| Button | `Button.module.css` | ✅ |
| Card | `Card.module.css` | ✅ |
| Modal | `Modal.module.css` | ✅ |
| ThemeToggle | `ThemeToggle.module.css` | ✅ |
| Header | `Header.module.css` | ✅ |
| Layout | `Layout.module.css` | ✅ |

**Avantages CSS Modules** :
- ✅ Pas de conflit de noms de classes
- ✅ Scope local par composant
- ✅ Meilleure maintenabilité
- ✅ Support TypeScript (avec `.d.ts`)

---

### 4. Variables CSS pour les deux thèmes

**Fichier** : `src/styles/variables.css`

#### Variables dynamiques (changent selon le thème) :

```css
/* Dark Mode */
[data-theme="dark"] {
  --text-primary: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --bg-primary: #09001d;
  --bg-card: rgba(255, 255, 255, 0.05);
  --border-color: rgba(255, 255, 255, 0.1);
}

/* Light Mode */
[data-theme="light"] {
  --text-primary: #212121;
  --text-secondary: rgba(0, 0, 0, 0.7);
  --bg-primary: #f0f2f5;
  --bg-card: #ffffff;
  --border-color: rgba(0, 0, 0, 0.1);
}
```

---

### 5. Background adaptatif

**Fichier** : `src/components/layout/Layout.module.css`

- **Mode Dark** : Image de fond (`bg quiz.jpg`) avec opacity 0.3 + overlay sombre
- **Mode Light** : Fond uni clair (`#f0f2f5`) sans image
- Transition smooth entre les deux modes

**Code CSS** :
```css
/* Background uniquement en dark */
[data-theme="dark"] .layout::before {
  background-image: url('/img/bg%20quiz.jpg');
  opacity: 0.3;
}

/* Overlay adaptatif */
.layout::after {
  background: var(--bg-overlay);
}

[data-theme="light"] .layout::after {
  background: transparent;
}
```

---

## 🎨 Palette de couleurs

### Mode Dark
- **Primaire** : `#0024c4` (Bleu royal)
- **Background** : `#09001d` (Violet très foncé)
- **Texte** : `#ffffff` / `rgba(255, 255, 255, 0.7)`
- **Cards** : `rgba(255, 255, 255, 0.05)` avec backdrop-filter

### Mode Light
- **Primaire** : `#0024c4` (Bleu royal - identique)
- **Background** : `#f0f2f5` (Gris très clair)
- **Texte** : `#212121` / `rgba(0, 0, 0, 0.7)`
- **Cards** : `#ffffff` avec ombres

---

## 🧪 Comment tester

1. **Ouvrir l'application** : http://localhost:5174
2. **Localiser le switch** : En haut à droite du Header
3. **Cliquer sur le switch** :
   - 🌙 → ☀️ (Dark → Light)
   - ☀️ → 🌙 (Light → Dark)
4. **Vérifier la persistance** : Rafraîchir la page (F5), le thème reste le même
5. **Tester sur toutes les pages** : Accueil, Quiz, About, Contact

---

## 📦 Structure du code

```
src/
├── context/
│   └── ThemeContext.jsx        # Context + Provider
├── components/
│   ├── common/
│   │   ├── ThemeToggle.jsx     # Switch component
│   │   ├── ThemeToggle.module.css
│   │   ├── Button.jsx          # Adapté au thème
│   │   ├── Button.module.css
│   │   ├── Card.jsx            # Adapté au thème
│   │   ├── Card.module.css
│   │   ├── Modal.jsx           # Adapté au thème
│   │   └── Modal.module.css
│   └── layout/
│       ├── Header.jsx          # Inclut ThemeToggle
│       ├── Header.module.css
│       ├── Layout.jsx
│       └── Layout.module.css   # Background conditionnel
├── styles/
│   ├── variables.css           # Variables des 2 thèmes
│   └── global.css
└── App.jsx                     # Wrapped avec ThemeProvider
```

---

## 🔧 Comment ajouter le support du thème à un nouveau composant

### Étape 1 : Utiliser CSS Modules
```jsx
import styles from './MyComponent.module.css';

export const MyComponent = () => {
  return <div className={styles.container}>...</div>;
};
```

### Étape 2 : Utiliser les variables CSS
```css
.container {
  background: var(--bg-card);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}

.container:hover {
  background: var(--bg-card-hover);
}
```

### Étape 3 : (Optionnel) Accéder au thème en JS
```jsx
import { useTheme } from '../../context/ThemeContext';

export const MyComponent = () => {
  const { theme, isDark } = useTheme();

  return (
    <div>
      {isDark ? <MoonIcon /> : <SunIcon />}
    </div>
  );
};
```

---

## 🐛 Debugging

### Le thème ne change pas ?
1. Vérifier que `<ThemeProvider>` entoure bien `<AppRoutes>` dans `App.jsx`
2. Ouvrir DevTools → Application → LocalStorage → Vérifier la clé `app_theme`
3. Inspecter `<html>` → Attribut `data-theme` doit être `"dark"` ou `"light"`

### Le CSS ne s'applique pas ?
1. Vérifier l'import : `import styles from './Component.module.css'`
2. Vérifier les noms de classes : `styles.myClass` (camelCase)
3. S'assurer que les variables CSS sont dans `:root` ou `[data-theme]`

### Le background ne s'affiche pas ?
1. Vérifier le chemin : `/img/bg%20quiz.jpg` (espace encodé en `%20`)
2. Vérifier que l'image existe dans `public/img/`
3. Inspecter DevTools → Network → Chercher 404 errors

---

## ✨ Améliorations futures (Phase 2+)

- [ ] **Transition animée** entre dark/light (avec Framer Motion)
- [ ] **Auto-detection** du thème système (prefers-color-scheme)
- [ ] **Modes supplémentaires** : High contrast, Sepia
- [ ] **Personnalisation** : Choix de la couleur primaire
- [ ] **Preview instantanée** des thèmes sans cliquer

---

## 📚 Ressources

- [MDN - prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [CSS Variables Guide](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [CSS Modules](https://github.com/css-modules/css-modules)
- [React Context API](https://react.dev/reference/react/useContext)

---

**✅ Dark/Light Mode complet et fonctionnel !**

*Dernière mise à jour : 2025-11-11*
