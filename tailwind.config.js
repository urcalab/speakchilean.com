/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,md,liquid,erb,serb,rb}",
    "./frontend/javascript/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E26D5A",
        secondary: "#FFC107",
        background: "#F8F9FA",
        dark: "#343A40",
      },
    },
  },
  plugins: [],
};
