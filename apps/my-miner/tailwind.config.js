module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-button": "#3EC6FF"
      },
      spacing: {
        '450px': '450px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
