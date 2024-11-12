/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ["Red Hat Text"],
      },
      keyframes: {
        flipDown: {
          "100%": { transform: "rotateX(90deg)" },
        },
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        "flip-down": "flipDown 3s linear 1",
      },
    },
  },
  plugins: [],
};
