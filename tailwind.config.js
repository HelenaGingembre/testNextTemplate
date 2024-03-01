/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "rgb(var(--color-primary) / <alpha-value>)",
        primary_dark: "rgb(var(--color-primary-dark) / <alpha-value>)",
        secondary: "rgb(var(--color-secondary) / <alpha-value>)",
        neutral: "rgb(var(--color-neutral) / <alpha-value>)",
        orange: "rgb(var(--color-orange) / <alpha-value>)",
        green: "rgb(var(--color-green) / <alpha-value>)",
        blue_sky: "rgb(var(--color-blue-sky) / <alpha-value>)",
        beige: "rgb(var(--color-beige) / <alpha-value>)",
        gray: "rgb(var(--color-gray) / <alpha-value>)",
        gray_blue: "rgb(var(--color-gray-blue) / <alpha-value>)",
        gray_violet: "rgb(var(--color-gray-violet) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
