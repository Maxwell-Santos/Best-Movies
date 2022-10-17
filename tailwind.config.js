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
      transitionProperty: {
        'custom': 'opacity .25s, visibility 1s'
      },
      boxShadow: {
        'number' : '32px 10px 31px 0px #081524'
      },
      screens:{
        'smaller': '250px',
        'normal': '425px'
      }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
}
