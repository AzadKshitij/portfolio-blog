module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        spinO: 'spinO 1s linear',
      },
      keyframes: {
        spinO: {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000',
        white: '#fff',
        primary: '#181A1B',
        primaryLight: '#181A1B',
        link: '#674EE3',
        title: '#FA58B6',
        text: '#181A1B',
        background: '#FA58B6',
        code_block: '#242C3A',
      },
    },
  },
  plugins: [],
}
