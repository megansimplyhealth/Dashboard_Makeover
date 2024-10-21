// tailwind.config.js
const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      'white': '#ffffff',

      'apple-green': '#99cc33',
      'apple-green-80': '#acd55c',
      'apple-green-60': '#c2e084',
      'apple-green-40': '#d6eaad',
      'apple-green-20': '#ebf5d6',

      'leaf-green': '#006633',
      'leaf-green-80': '#32845c',
      'leaf-green-60': '#65a385',
      'leaf-green-40': '#99c1ac',
      'leaf-green-20': '#cbe0d5',

      'secondary-green': '#4da935',
      'secondary-green-80': '#71ba5d',
      'secondary-green-60': '#94cb86',
      'secondary-green-40': '#b8ddae',
      'secondary-green-20': '#dbeed7',

      'grey' : '#f2f2f2',
      'grey-2' : '#d8d8d8',
      'grey-3' : '#a1a1a1',
      'grey-4' : '#888888',

      'background-grey' : '#F6F7F9',

      'black' : '#000000',
      'white' : '#ffffff',

      'error-red' : '#e02020',      
      'error-red-20' : '#ff6969',
      'error-red-8' : '#fdeeee',

      'alert-yellow' : '#f7ec67',
      'alert-yellow-40' : '#fcf7c2',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
});