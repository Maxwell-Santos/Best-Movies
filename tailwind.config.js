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
      // keyframes: {
      //   'Animation': {
      //     '0%':{'transform': 'origin-[96%_0%]'},
      //     '50%' :{'transform': 'origin-[5%_100%]'},
      //     '100%' :{'transform': 'origin-[96%_0%]'},
      //   },
      // },
      // animation: {
      //   'bg-animation': 'Animation 53s ease infinite',
      // }
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
    require('@tailwindcss/line-clamp'),
  ],
}
