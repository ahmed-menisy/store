/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["*.{html,js}"],
   darkMode: "class",
   theme: {
      screens: {
         sm: "576px",
         md: "768px",
         lg: "992px",
         xl: "1200px",
         "2xl": "1400px",
      },
      container: {
         center: true,
         padding: "1rem",
      },
      extend: {
         backgroundImage: {
            banner1: "url('/images/all-prod/banner-1.jpg')",
            banner2: "url('/images/all-prod/banner-2.jpg')",
            banner3: "url('/images/all-prod/banner-3.jpg')",
         },
         fontFamily: {
            popines: "Poppins, sans-serif",
            Roboto: "Roboto, sans-serif",
         },
         colors: {
            primary: "rgb(253, 61, 87)",
            "primary-light": "#f4cad0",
            secondary: "rgb(43, 45, 66)",
            "sec-light": "rgb(237, 236, 236)",
            "dark-color": "#121216ab",
            "dark-color-hov": "#000",
         },
      },
   },
   plugins: [
      require("@tailwindcss/forms")({
         strategy: "class", // only generate classes
      }),
   ],
};
