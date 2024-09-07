/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#d1d5db',
        secondary: '#FF204E',
        background: '#1f2937',
      },
    },
  },
  plugins: [],
}

