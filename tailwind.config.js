/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/towing.png')",
      },
    },
  },
  plugins: [],
};
