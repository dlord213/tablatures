/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/*.js",
    "./app/track/*.js",
    "./app/home/*.js",
    "./app/home/components/*.js",
    "./app/search/*.js",
    "./app/search/components/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["WorkSans_400Regular"],
        Text: ["WorkSans_400Regular"],
      },
    },
  },
  plugins: [],
};
