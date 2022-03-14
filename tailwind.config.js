module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
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

        html: '#E34C26',
        css: '#2ECC71',
        react: '#61DBFB',
        native: '#F0DB4F',
        js: '#F0DB4F',
        ts: '#F0DB4F',
        tsx: '#F0DB4F',
        nodejs: '#F0DB4F',
        figma: '#F0DB4F',
        git: '#F0DB4F',
      },
      fontFamily: {
        lora: ['Lora', 'serif'],
        montserrat: ['Montserrat', 'serif'],
        roboto: ['Roboto', 'serif'],
        cursive: ['Cedarville Cursive'],
        lobster: ['Lobster'],
        rancho: ['Rancho'],
      },
    },
  },
  plugins: [],
}
