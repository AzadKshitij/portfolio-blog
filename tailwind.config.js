module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        primary: '#181A1B',
        primaryLight: '#181A1B',
        link: '#674EE3',
        title: '#FA58B6',
        code_block: '#242C3A',
      },
    },
  },
  plugins: [],
}
