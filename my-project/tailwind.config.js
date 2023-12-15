/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6DB1BF",
        secondary: "#FFEAEC",
        text: "#36382E",
        green: "#3F6C51",
        action: "#7EE8FA",
      },
      fontFamily: {
        Baloo2: ["Baloo2"],
      },
      scale: {
        // hehe
      },
    },
  },
  plugins: [],
};
