/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('/src/assets/images/HeroLaptop.png')",
        chevron: "url('/src/assets/images/Vector.png')",
      },
    },
    fontFamily: {
      inter: "Inter, sans-serif",
      poppins: "Poppins, sans-serif",
      shadow: "Londrina Shadow, sans-serif",
    },
  },
  plugins: [],
};
