/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
          colors: {
              "primary": "#ec5b13",
              "background-light": "#f8f6f6",
              "background-dark": "#221610",
              "coffee-green": "#2D4F1E",
              "coffee-yellow": "#F4B41A",
          },
          fontFamily: {
              "display": ["Public Sans", "sans-serif"]
          },
          borderRadius: {
              "DEFAULT": "0.25rem",
              "lg": "0.5rem",
              "xl": "0.75rem",
              "full": "9999px"
          },
      },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}
