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
        primary: '#1A1A40',
        primaryLight: '#270082',
        link: '#7A0BC0',
        title: '#FA58B6',
      },
    },
  },
  plugins: [],
}
