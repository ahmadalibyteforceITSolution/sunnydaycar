/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0A3366',
          'navy-dark': '#061D3A',
          'navy-light': '#134685',
          cyan: '#00BDE0',
          'cyan-hover': '#00A3C2',
          'cyan-light': '#E6F8FC',
          'cyan-soft': '#F0FAFD',
          yellow: '#FFB800',
          'yellow-light': '#FFF8E7',
          pink: '#E9577D',
          'pink-light': '#FDF2F5',
          slate: '#566593',
          'slate-light': '#718096',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 10px 25px -5px rgba(0, 189, 224, 0.25)',
        'glow-navy': '0 15px 30px -10px rgba(10, 51, 102, 0.2)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 35px -5px rgba(10, 51, 102, 0.08)',
      }
    },
  },
  plugins: [],
}
