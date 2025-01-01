/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        orange: "#FCA311",
        blue: "#2B50AA",
        yellow: {
        '50': '#fdf8ed',
        '100': '#f8eacd',
        '200': '#f1d296',
        '300': '#eab55f',
        '400': '#e59d3a',
        '500': '#df8530',
        '600': '#c35d1c',
        '700': '#a2421b',
        '800': '#84341c',
        '900': '#6d2c1a',
        '950': '#3e150a',
    },
    
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        kanit: ['Kanit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};