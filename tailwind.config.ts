import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./constant/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryBlack: "rgba(32,32,32)",
        primaryWhite: "rgba(255,255,255)",
        primaryGray: "rgba(0, 0, 0, 0.05)",
        primaryRed: "rgba(164,42,55)",
        oceanBlue: "rgba(5,67,190)",
        cashmere: "rgba(228,201,164)",
        ecru: "rgb(246,245,242)",
        glassCard:
          "linear-gradient(to right bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.3))",
      },
    },

    variants: {
      display: ["group-hover"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
export default config;

/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
