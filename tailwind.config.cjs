/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-bg": "#D9D9D9",
        "theme-accent": "#FF1454",
        "theme-accent-dark": "#BE1E4A",
        "theme-bg-dark": "#222222",
        "theme-bg-accent-dark": "#23272A",
        "theme-bg-accent-light": "#f3f3f3",
        "theme-bg-accent-dark-alt": "#1b1b1b",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
