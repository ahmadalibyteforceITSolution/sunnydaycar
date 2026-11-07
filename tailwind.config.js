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
          navy: '#1E293B',
          'navy-dark': '#0F172A',
          'navy-light': '#334155',
          cyan: '#C2415D',
          'cyan-hover': '#9F1239',
          'cyan-light': '#FFE6EA',
          'cyan-soft': '#FFF5F7',
          yellow: '#F59E0B',
          'yellow-hover': '#D97706',
          'yellow-light': '#FEF3C7',
          'yellow-soft': '#FEF9C3',
          pink: '#C2415D',
          'pink-hover': '#9F1239',
          'pink-dark': '#881337',
          'pink-light': '#FFE6EA',
          'pink-soft': '#FFF5F7',
          slate: '#475569',
          'slate-light': '#64748B',
        }
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 10px 25px -5px rgba(255, 51, 119, 0.35)',
        'glow-pink': '0 10px 25px -5px rgba(255, 51, 119, 0.35)',
        'glow-yellow': '0 10px 25px -5px rgba(255, 183, 3, 0.35)',
        'glow-navy': '0 15px 30px -10px rgba(15, 23, 42, 0.2)',
        'soft': '0 8px 30px rgba(0, 0, 0, 0.05)',
        'card': '0 10px 35px -5px rgba(255, 51, 119, 0.08)',
      }
    },
  },
  plugins: [],
}
