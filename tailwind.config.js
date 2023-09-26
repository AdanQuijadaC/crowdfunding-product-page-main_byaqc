/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{html,js}",
    "./pages/**/*.{html,js}",
    "./index.html",
  ],
  theme: {
    extend: {
      /* Personalize your code here */
      colors: {
        ModerateCyan: "hsl(176, 50%, 47%)",
        DarkCyan: "hsl(176, 72%, 28%)",
      },
      fontFamily: {
        body: ["Kumbh Sans"],
      },
      backgroundImage: {
        "hero-desktop": "url('/images/image-hero-desktop.jpg')",
      },
    },
  },
};
