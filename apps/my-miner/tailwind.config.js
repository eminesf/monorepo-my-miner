module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "blue-button": "#3EC6FF",
        "orange-primary": "#fe6927",
        "orange-secondary": " #fe8e28"
      },
      spacing: {
        '450px': '450px',
        '1200px': '1200px'
      },
      backgroundImage: theme => ({
        'eth-bg': "url('../public/bg-eth.jpg')",
      }),
    },
  },
  variants: {
    extend: {
      animation: ['motion-safe'],
    },
  },
  plugins: [],
}
