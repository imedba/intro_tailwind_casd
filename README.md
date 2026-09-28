# Formation Tailwind CSS — CSD

Dépôt d'exercices pour la formation Tailwind CSS dispensée à Arnaud Szulek (CSD), du 28 au 30 septembre 2026.

## Contexte

CSD (Comité du Secret Statistique) exploite un site institutionnel WordPress avec du Bootstrap 3, 4 et 5 mélangés selon les applications, sur plusieurs milliers de pages. Deux enjeux structurent toute la formation :

- **Mobile** : des mises en page pensées desktop, à rendre fiables sur tous les écrans
- **Accessibilité RGAA** : focus visibles, contrastes, structure sémantique — une conformité obligatoire

L'objectif des 3 jours est d'amener Arnaud (développeur front-end senior, ~20-25 ans d'expérience, jusqu'ici sur Bootstrap et CSS classique) à une maîtrise opérationnelle de Tailwind CSS v3, en vue d'une migration progressive du site CSD.

> ⚠️ **Aucun outil d'IA (Copilot, ChatGPT, Claude Code ou équivalent) n'est utilisé ni montré dans ce dépôt ni pendant les sessions**, conformément à la politique de confidentialité de CSD.

## Prérequis

- [Node.js](https://nodejs.org/) (version LTS) — vérifier avec `node -v`
- Un éditeur de code (VS Code recommandé, avec l'extension **Tailwind CSS IntelliSense**)

## Installation

```bash
git clone <url-du-depot>
cd formation-tailwind
npm install
```

Si le projet est initialisé depuis zéro :

```bash
mkdir formation-tailwind && cd formation-tailwind
npm init -y
npm install -D tailwindcss@3 postcss autoprefixer
npx tailwindcss init -p
```

> ⚠️ **Piège v3/v4 :** Tailwind est installé explicitement en version 3 (`tailwindcss@3`). Sans ce `@3`, npm installe la v4 par défaut et l'ensemble des commandes ci-dessous change (plus de `npx tailwindcss init`, plus de directives `@tailwind`, config via `@theme` dans le CSS). **Toujours se référer à `v3.tailwindcss.com/docs`**, jamais à `tailwindcss.com/docs` qui documente la v4.

## Lancer le projet en développement

```bash
npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
```

Cette commande régénère automatiquement `dist/output.css` à chaque sauvegarde. Ouvrir `src/index.html` dans le navigateur pour visualiser le rendu.

## Structure du projet

```
formation-tailwind/
├── src/
│   ├── input.css          # Point d'entrée Tailwind (@tailwind base/components/utilities)
│   └── index.html          # Page de test / exercices
├── dist/
│   └── output.css          # CSS généré (ne pas éditer à la main)
├── tailwind.config.js      # Configuration centrale (content, theme, plugins)
├── postcss.config.js       # Config PostCSS (Tailwind + Autoprefixer)
└── package.json
```

## Configuration (`tailwind.config.js`)

```js
module.exports = {
  content: ["./src/**/*.{html,php,twig}"],
  theme: { extend: {} },
  plugins: [],
}
```

- `content` : liste des fichiers scannés par le moteur JIT pour détecter les classes utilisées. Toute classe absente de ces fichiers ne sera pas générée.
- `theme.extend` : ajoute des valeurs personnalisées (couleurs de marque, etc.) **sans écraser** la palette et les échelles par défaut de Tailwind.
- `plugins` : extensions officielles ou tierces (vide pour l'instant).

## Contenu couvert — Jour 1 : Fondamentaux

### Philosophie
- Component-first (Bootstrap) vs Utility-first (Tailwind)
- Le moteur JIT et la génération de CSS à la demande
- Règle d'or : jamais de nom de classe construit par concaténation (`bg-{{ couleur }}-500`)

### Les 6 familles de classes utilitaires

| Famille | Exemples | Documentation |
|---|---|---|
| Spacing | `p-4`, `m-4`, `px-6 py-2` | [padding](https://v3.tailwindcss.com/docs/padding) · [margin](https://v3.tailwindcss.com/docs/margin) |
| Typography | `text-lg`, `font-bold` | [font-size](https://v3.tailwindcss.com/docs/font-size) |
| Colors | `bg-blue-500`, échelle 50→950 | [background-color](https://v3.tailwindcss.com/docs/background-color) |
| Sizing | `w-1/2`, `max-w-md` | [width](https://v3.tailwindcss.com/docs/width) · [max-width](https://v3.tailwindcss.com/docs/max-width) |
| Flexbox | `flex`, `justify-between`, `gap-4` | [flex](https://v3.tailwindcss.com/docs/flex) · [gap](https://v3.tailwindcss.com/docs/gap) |
| Grid | `grid`, `grid-cols-3` | [grid-template-columns](https://v3.tailwindcss.com/docs/grid-template-columns) |

### Responsive (mobile-first)

| Préfixe | Largeur min. Tailwind | Bootstrap 5 |
|---|---|---|
| `sm:` | 640px | 576px |
| `md:` | 768px | 768px |
| `lg:` | 1024px | 992px |
| `xl:` | 1280px | 1200px |
| `2xl:` | 1536px | 1400px |

> Seul `md:` tombe au même endroit dans les deux frameworks — point de vigilance en migration progressive.

### États interactifs & accessibilité (RGAA)

```html
<button class="bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
```

- `hover:` / `focus:` en préfixe direct · `group` + `group-hover:` pour réagir au survol d'un parent
- **Règle RGAA 10.7 non négociable** : jamais `focus:outline-none` sans le remplacer par un `focus:ring-*` visible

### Cohérence à grande échelle

Deux approches pour éviter qu'un même composant dérive d'une page à l'autre :

```css
/* @apply — CSS */
.btn-primary { @apply px-5 py-2.5 rounded-lg bg-blue-600 font-semibold text-white hover:bg-blue-700; }
```

```twig
{# Composant Twig — recommandé pour CSD (Twig via Timber côté WordPress) #}
{% include 'components/button.twig' with { label: 'Envoyer' } %}
```

## Avancement de la formation

- [x] Jour 1 — Philosophie utility-first, installation, 6 familles de classes, responsive, états interactifs, composants réutilisables
- [ ] Jour 2 — Configuration avancée, thème sur mesure, plugins, accessibilité RGAA en profondeur
- [ ] Jour 3 — Stratégie de migration Bootstrap → Tailwind, cohabitation, bilan

## Ressources

- Documentation officielle (version utilisée pour cette formation) : [v3.tailwindcss.com/docs](https://v3.tailwindcss.com/docs)
- Extension VS Code : [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
</content>