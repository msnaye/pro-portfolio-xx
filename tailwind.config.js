/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html"],
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
      extend: {
        screens: {
          "sm": "480px"
        },
        spacing: {
          "big": "48rem"
        }
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        ibarraRealNova: ['Ibarra-Real-Nova', 'serif']
      }
    },
    plugins: [],
  }
}
