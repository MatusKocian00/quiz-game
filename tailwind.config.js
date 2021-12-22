module.exports = {
  content: ["./public/*.{html,js}"],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      minWidth: {
        '0': '0',
        '50': '50px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      minHeight: {
        '0': '0',
        '50': '50px',
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        'full': '100%',
      },
      screens: {
        'xs': '475px'
      },
      colors:
      {
        'myblack': '#222831',
        'mygray': '#393E46',
        'myblue': '#00ADB5',
        'mywhite': '#EEEEEE',
      }
    },
  },
  variants: {
    extend: {

    },
  },
  plugins: [],
}
