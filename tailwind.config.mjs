/** @type {import('tailwindcss').Config} */
import animations from "@midudev/tailwind-animations";

export default {
  darkMode: "selector",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },

      colors: {
        primary: {
          50: "#e8f1ff",
          100: "#e0ecff",
          200: "#c7dbfe",
          300: "#a5c2fc",
          400: "#819ff8",
          500: "#637cf1",
          600: "#4656e5",
          700: "#3844ca",
          800: "#303ba3",
          900: "#2e3881",
          950: "#1b1f4b",
        },
        secondary: {
          50: "#f5f7fa",
          100: "#e9eef5",
          200: "#cfdae8",
          300: "#a5bcd4",
          400: "#7498bc",
          500: "#537ca4",
          600: "#406289",
          700: "#35506f",
          800: "#2f445d",
          900: "#2b3b4f",
          950: "#141b25",
        },
      },

      animationDelay: {
        0: "0ms",
        200: "200ms",
        400: "400ms",
        600: "600ms",
      },

      animation: {
        reveal: "reveal .6s ease-out both",
        "slide-in-left": "slide-in-left .6s ease-out both",
        "slide-in-right": "slide-in-right .6s ease-out .3s both",
      },
      keyframes: {
        reveal: {
          from: { opacity: 0, translate: "0 200px" },
          to: { opacity: 1, translate: "0 0" },
        },
        "slide-in-left": {
          "0%": {
            transform: "translateX(-200px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
        "slide-in-right": {
          "0%": {
            transform: "translateX(200px)",
            opacity: 0,
          },
          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
      backgroundImage: {
        "header-1": `url('/admindani/images/bg_1.webp')`,
        "about-arriba": `url('/admindani/images/about-1.webp')`,
        "about-abajo": `url('/admindani/images/about.webp')`,
        "choose-up": `url('/admindani/images/about-3.webp')`,
        question: `url('/admindani/images/about-2.webp')`,
      },
    },
  },
  plugins: [animations],
};
