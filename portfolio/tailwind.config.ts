/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#1e1e2f',
        foreground: '#f4f4f5',
        muted: '#44475a',
        border: '#3f3f5e',
        primary: '#7f5af0',
        secondary: '#2cb67d',
        card: '#2A2A40',
        cardForeground: '#F5F5F5',
        cardHover: '#3A3A5A',
      },
    },
  },
  plugins: [],
}