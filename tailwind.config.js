/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#191919",
        },
      },
      fontSize: {
        xxs: "0.625rem",
      },
    },
  },
  plugins: [],
};
