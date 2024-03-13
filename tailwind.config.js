/** @type {import('tailwindcss').Config} */
export default {
  tailwindConfig: './styles/tailwind.config.js',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'key-feature-mask': "url('public/icons/key-feature-mask.svg')",
      // }
    },
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
    },
    container: {
      center: true,
      // or have default horizontal padding
      padding: {
        DEFAULT: "10px",
        sm: "12px",
        xl: "24px",
      },

      // default breakpoints but with 40px removed
      screens: {
        sm: '576px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
    },
  },
  plugins: [],
}

