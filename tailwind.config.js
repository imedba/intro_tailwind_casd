/** @type {import('tailwindcss').Config} */
module.exports = {
  // content, c'est la liste des fichiers à scanner, la ou les classes Tailwind seront sollicitées (tout les fichiers html, php et twig présents dans le dossier src/)
  content: ["./src/**/*.{html,php,twig}"],
  // theme, c'est le design system du projet, c'est ce qui permet de définir toutes les valeurs par défaut de Tailwind (couleurs, les tailles, les espacements, ...)
  theme: {
    // Ici le band n'est aps anodin, sans lui Tailwind remplacerait TOUTE la palette de couleurs par défaut de Tailwind (bleu, rouge, vert, ...) par cette couleur, plus auucn clsse bg-blue-500 ne fonctionnerait
    extend: {
      colors: {
          brand: {
          50: "#F0F9FF", 100: "#E0F2FE", 200: "#BAE6FD", 400: "#38BDF8",
          500: "#0EA5E9", 600: "#0284C7", 700: "#0369A1", 900: "#0C4A6E"
          },
          module1 : "#799DA7",
          module2 : "#A6C4CE",
          module3 : "#9BC0C3",
        }
    },
    fontFamily: {
      sans : ["Raleway", "sans-serif", "system-ui"]
    }
  },
  //plugins, c'est une liste de fonctionnalités aditionnelles qu'on peut brancher.
  plugins: [],
}