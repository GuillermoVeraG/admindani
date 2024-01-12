/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        flaticon: ["Flaticon"],
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        primary: {
          50: "#dbe9ff",
          100: "#c8dcfe",
          200: "#a9caff",
          300: "#7caefe",
          400: "#4b8ffb",
          500: "#3c83f6",
          600: "#1164e8",
          700: "#185cc9",
          800: "#184ca0",
          900: "#183e7b",
          950: "#112545",
        },
        secondary: {
          50: "#eff1f5",
          100: "#e4e5ec",
          200: "#d0d6e2",
          300: "#c4ccd9",
          400: "#96a5bb",
          500: "#7d8faa",
          600: "#6c7d99",
          700: "#60708a",
          800: "#515e70",
          900: "#444e5a",
          950: "#2b3036",
        },
      },
    },
  },
  plugins: [],
};
