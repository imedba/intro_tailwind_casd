/** @type {import('tailwindcss').Config} */
module.exports = {
  // content, c'est la liste des fichiers à scanner, la ou les classes Tailwind seront sollicitées (tout les fichiers html, php et twig présents dans le dossier src/)
  content: ["./src/**/*.{html,php,twig}"],
  // theme, c'est le design system du projet, c'est ce qui permet de définir toutes les valeurs par défaut de Tailwind (couleurs, les tailles, les espacements, ...)
  theme: {
    // Ici le band n'est aps anodin, sans lui Tailwind remplacerait TOUTE la palette de couleurs par défaut de Tailwind (bleu, rouge, vert, ...) par cette couleur, plus auucn clsse bg-blue-500 ne fonctionnerait
    extend: {
      colors: {
          brand: "#0EA5E9"
        }
    },
  },
  //plugins, c'est une liste de fonctionnalités aditionnelles qu'on peut brancher.
  plugins: [],
}