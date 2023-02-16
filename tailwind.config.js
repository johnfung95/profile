/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 5s ease-in-out",
      },
      keyframes: (theme) => ({
        fadeIn: {
          "0%": { color: theme("colors.transparent"), opacity: "0" },
          "100%": { color: theme("colors.white"), opacity: "1" },
        },
      }),
    },
  },
  plugins: [],
};
