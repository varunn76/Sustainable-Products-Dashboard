/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2E7D32",
          light: "#66BB6A",
          dark: "#1B5E20",
        },
        background: "#F1F8E9",
        text: "#213547",
        earth: "#8D6E63",
        accent: "#81D4FA",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
