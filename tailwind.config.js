/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        generalsans: ['General Sans', 'sans-serif'],
      },
      colors: {
        'black-200': '#1c1c1c',
        'black-300': '#1a1a1a',
        'black-500': '#0f0f0f',
        'black-600': '#0a0a0a',
        'white-500': '#f0f0f0',
        'white-600': '#e0e0e0',
        'white-800': '#c0c0c0',
      },
      boxShadow: {
        'black-200': '0 4px 6px rgba(28,28,28,0.5)',
      },
    },
  },
  plugins: [],
}