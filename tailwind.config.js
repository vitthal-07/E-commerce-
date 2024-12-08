/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#021526",
        primary: "#4335A7",
        secondary: "#6EACDA",
        text: "#E2E2B6",
      },
    },
  },
  plugins: [],
};
