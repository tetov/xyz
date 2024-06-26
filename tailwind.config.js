/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("@headlessui/tailwindcss"),
    require("@tailwindcss/typography"),
  ],
  theme: {
    extend: {
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.12)",
        md: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      colors: {
        "light-bg": "#FAFAFA",
        "light-text": "#333",
        "dark-text": "#FAFAFA",
        "dark-bg": "#212121",
        "dark-alt": "#666",
        "light-alt": "#DDD",
        purple: "#988ADE",
        "dark-purple": "#502a76",
      },
      fontFamily: {
        sans: ["Noto Sans", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      spacing: {
        28: "7rem",
      },
      transitionProperty: { opacity: "opacity", shadow: "shadow" },
    },
  },
};
