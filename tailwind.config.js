/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        romantic: ['"Segoe Print"', '"Bradley Hand"', 'cursive'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 25px rgba(244, 114, 182, 0.4)',
      },
    },
  },
  plugins: [],
}
