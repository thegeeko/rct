/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { colors: { "theme-bg": "#D9D9D9", "theme-accent": "#FF1454" } },
  },
  plugins: [],
};
