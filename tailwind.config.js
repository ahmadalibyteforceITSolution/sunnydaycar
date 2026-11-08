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
          'cyan-light': '#E0F7FA',
          'cyan-soft': '#F0FAFD',
          blue: '#0284C7',
          'blue-light': '#E0F2FE',
          yellow: '#FFB800',
          'yellow-hover': '#D97706',
          'yellow-light': '#FFF8E7',
          'yellow-soft': '#FEF9C3',
          pink: '#00BDE0',
          'pink-hover': '#00A1BE',
          'pink-dark': '#0A3366',
          'pink-light': '#CCF2F9',
          'pink-soft': '#ECF5FB',
          slate: '#566593',
          'slate-light': '#64748B',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 10px 25px -5px rgba(0, 189, 224, 0.35)',
        'glow-pink': '0 10px 25px -5px rgba(0, 189, 224, 0.35)',
        'glow-yellow': '0 10px 25px -5px rgba(255, 183, 3, 0.35)',
        'glow-navy': '0 15px 30px -10px rgba(10, 51, 102, 0.25)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 35px -5px rgba(10, 51, 102, 0.08)',
      }
    },
  },
  plugins: [],
}
