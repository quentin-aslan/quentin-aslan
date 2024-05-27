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
