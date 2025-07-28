/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('/img/banner.webp')",
      },
    },
  },
  plugins: [],
};
