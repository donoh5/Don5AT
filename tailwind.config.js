module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        spacing: {
            '128': '32rem',
            '144': '36rem',
            '160': '40rem',
            '192': '48rem',
            '256': '64rem'
        },
        backgroundImage: {
            'wood-pattern': "url('/src/images/wood-pattern.png')",
            'wood-pattern2': "url('/src/images/wood-pattern2.png')",
        },
        colors: {
            'primary': '#D7C49E',
            'secondary': '#343148',

            'wood-1': '#935D33',
            'wood-2': '#c7b199',
            'wood-3': '#9f8473',
            'wood-4': '#4F372D',
            'wood-5': '#D6BFAE',
        }
    },
  },
  variants: {
    extend: {},
    width: ["responsive", "hover", "focus"],
  },
  plugins: [],
}
