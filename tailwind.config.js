/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'primary-dark': '#121212',
        'secondary-dark': '#1E1E1E',
        'accent-gold': '#D4AF37',
        // Light mode colors
        'light-bg': '#F5F5F5',
        'light-secondary': '#FFFFFF',
        'light-text': '#1A232E',
        'light-text-secondary': '#4A5568',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  plugins: [],
};
