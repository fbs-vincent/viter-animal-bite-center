/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner:
          "linear-gradient(to right, rgba(0,0,0,20), rgba(255,255,255,0)), url('/img/banner-2.webp')",
      },
    },
  },
  plugins: [],
};
