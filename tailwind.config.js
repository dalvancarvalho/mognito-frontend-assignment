/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        platypi: ['Platypi Variable', 'serif'],
        'red-hat': ['Red Hat Text Variable', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
