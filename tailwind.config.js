/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-pattern": "url('/public/hero-pattern.svg')",
      },
      colors: {
        primary: "#0F0F0F",
        secondary: "#F2F2F2",
        tertiary: "#F2F2F2",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
  // content: ["./pages/**/*.{ts,tsx}", "./public/**/*.html"],
};
