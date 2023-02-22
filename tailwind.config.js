/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '333px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1281px',
      '2xl': '1536px',
    },

    extend: {
      fontFamily: {
        Inter: "'Inter', sans-serif;",
      },

      colors: {
        primaryColor: "#475569",
        seconderyTxtColor: "#1e293b",
        ringColor: "#0f172a",
        orangeColor: "#FA916B",
        cyanColor: "#0CE7FA",
        successColor: "#50c793",
        warningColor: "#FA916B",
        lightGray: "#A0AEC0",
        borderColor: "#c6cbd16e"
      },
    },
  },
  plugins: [],
}
