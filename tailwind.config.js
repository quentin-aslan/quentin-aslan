/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00549A',
        secondary: '#7e91bc',
        tertiary: '#e2f0ff',
        quaternary: '#f1f1e6',
      },
      animation: {
        'rotateRightAndScale': 'rotateRightAndScale 5s linear ',
        'rotateLeftAndScale': 'rotateLeftAndScale 5s linear ',
        'fade-in-left': 'fadeInLeft 1s',
        'fade-in-right': 'fadeInRight 1s',
        'fade-in-left-slow': 'fadeInLeft 2s',
        'fade-in-right-slow': 'fadeInRight 2s',
        'fadeInHeroImage': 'fadeIn 0.2s ease-in-out',
        'wave': 'wave 1.5s ease-in-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
        },
        rotateRightAndScale: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
            opacity: '0',
          },
          '50%': {
            opacity: '1',
          },
          '100%': {
            transform: 'rotate(360deg) scale(2)',
            opacity: '0',
          },
        },
        rotateLeftAndScale: {
          '0%': {
            transform: 'rotate(0deg) scale(1)',
          },
          '100%': {
            transform: 'rotate(-360deg) scale(2)',
            opacity: '0',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        fadeOut: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-300px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(300px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
    boxShadow: {
      // Default Tailwind shadows are kept here for reference
      'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
      'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
      'lg': '0 10px 15px rgba(0, 0, 0, 0.15)',
      'custom-shadow': '.25rem .25rem 0rem #e4e6eb',
      'custom-shadow-primary': '.25rem .25rem 0rem #00549A',

    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animation-reverse': {
          'animation-direction': 'reverse',
        },
      })
    },
  ],
  safelist: [
    'text-4xl', 'font-bold', 'mb-6', 'text-gray-900',
    'text-3xl', 'font-semibold', 'mb-5', 'text-gray-800',
    'text-2xl', 'font-semibold', 'mb-4', 'text-gray-700',
    'text-base', 'text-gray-700', 'leading-relaxed', 'mb-6',
    'list-disc', 'pl-5', 'mb-6',
    'list-decimal', 'pl-5', 'mb-6',
    'mb-3',
    'my-8', 'border-gray-200',
    'text-blue-600', 'hover:underline',
    'font-bold', 'text-gray-800',
    'bg-gray-900', 'text-gray-100', 'p-4', 'rounded-lg', 'overflow-x-auto', 'mb-6', 'text-sm',
    'font-mono', 'text-sm', 'p-1', 'rounded-lg', 'bg-gray-900', 'text-gray-200',
  ],

}
