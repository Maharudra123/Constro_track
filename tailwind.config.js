/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "construction-blue": "#1e40af",
        "safety-orange": "#ea580c",
        "progress-green": "#16a34a",
      },
    },
  },
  plugins: [],
};
