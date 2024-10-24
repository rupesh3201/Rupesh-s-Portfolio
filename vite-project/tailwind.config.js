/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          ptSans: ["PT Sans", "sans-serif"],
        },
        backgroundImage: {
          "footer-texture": "url('./src/Assets/footer.jpg')", // Adjusted path
          "hero-texture": "url('./src/Assets/hero.jpg')",
          "loading-texture":"url('./src/Assets/loadingTopic.jpg')", 
        },
       
      },
    },
    plugins: [],
  };
  