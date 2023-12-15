/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#f2e29f", secondary: "#16697A", action: "#7EE8FA" },
      fontFamily: {
        Baloo2: ["Baloo2"],
      },
    },
  },
  plugins: [],
};
