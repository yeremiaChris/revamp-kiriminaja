/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      padding: {
        center: true,
        DEFAULT: "2rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "9rem",
      },
    },
    extend: {
      colors: {
        primary: "#6f2fab",
        secondary: "#f76707",
        "secondary-opacity": "rgba(247,103,7,.1)",
        "primary-opacity": "rgba(111,47,171,.10)",
      },
    },
  },
  plugins: [],
};
