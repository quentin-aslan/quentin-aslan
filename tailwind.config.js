/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00549A',
        'secondary': '#007EBA',
      },
      animation: {
        'fade-in-left': 'fadeInLeft 1s',
        'fade-in-right': 'fadeInRight 1s',
        'fade-in-left-slow': 'fadeInLeft 2s',
        'fade-in-right-slow': 'fadeInRight 2s',
      },
      keyframes: {
        fadeInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-100px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
            '0%': { opacity: '0', transform: 'translateX(100px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
        }
      }
    },
    boxShadow: {
      // Default Tailwind shadows are kept here for reference
      sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px rgba(0, 0, 0, 0.1)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.15)',
      'custom-shadow': '.25rem .25rem 0rem #e4e6eb',
      'custom-shadow-primary': '.25rem .25rem 0rem #00549A',

    },
  },
  plugins: []
}
