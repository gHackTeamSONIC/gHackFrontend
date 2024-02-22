/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#FFE6E680",
        secondary: "#4CAF50",
      },
      fontFamily: {
        poppins: ["Inter", "Montserrat"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      e:"850px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
