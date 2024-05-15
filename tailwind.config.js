/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector"],
  theme: {
    extend: {
      colors: {
        'primaryLight': '#ffffff',
        'secondaryLight': '#1b1b1b',
        'primaryDark':"#1b1b1b",
        'secondaryDark':'#ffffff',
        'lightgray':'#F8F8F8',
        'txtPlaceholder':'rgba(27, 27, 27, .4)',
        "txtgray":'#8A8A8A',
        'rating':'#fca600'
     },
     // Define custom gradients in the 'gradientColorStops' theme key
     backgroundImage: theme => ({
      'primaryDarkGradient': 'linear-gradient(to left, #1b1b1b, #1f1f1f, #232323, #282828, #2c2c2c);',
      'secondaryDarkGradient':'linear-gradient(to right, #f8f8f8, #f8f8f8, #f8f8f8, #f8f8f8, #f8f8f8)'
    }),
    filter : {
      'logoBlock': 'invert(100%) sepia(1%) saturate(1649%) hue-rotate(39deg) brightness(100%) contrast(87%)',
    },
      fontFamily: {
        'monsterratR': ['MontserratR'],
        'monsterratM': ['MontserratM'],
        'monsterratSB': ['MontserratSB'],
        'monsterratB': ['MontserratB'],
      },
      fontSize: {
        // Define font sizes based on your variables
        'bodyBase': '2vh',
        'fs1': '0.11vh',
        'fs2': '0.21vh',
        'fs4': '0.42vh',
        'fs8': '0.85vh',
        'fs10': '1.06vh',
        'fs12': '1.27vh',
        'fs14': '1.48vh',
        'fs16': '1.69vh',
        'fs18': '1.90vh',
        'fs20': '2.11vh',
        'fs22': '2.32vh',
        'fs24': '2.54vh',
        'fs26': '2.75vh',
        'fs28': '2.97vh',
        'fs30': '3.17vh',
        'fs32': '3.39vh',
        'fs34': '3.60vh',
        'fs36': '3.81vh',
        'fs38': '4.02vh',
        'fs40': '4.23vh',
        'fs42': '4.44vh',
        'fs44': '4.66vh',
        'fs46': '4.87vh',
        'fs48': '5.08vh',
        'fs50': '5.29vh',
      },
      boxShadow: {
        'btnPrimary': '0px 5px 19px rgba(0,0,0,.4)',
      },
    },
  },
  plugins: [],
};
