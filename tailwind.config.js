module.exports = {
  content: [
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: 'Lato, sans-serif',
      },
      animation: {
        'spin-fast': 'spin 1s linear infinite',
      },
      transitionProperty:{
        'custom': 'opacity .25s, visibility 1s'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
}
