module.exports = {
  content: [
    './app/**/*.{js,jsx,md,mdx}',
    './components/**/*.{js,jsx}',
    './theme.config.jsx'
  ],
  theme: {
    extend: {
      colors: {
        muto: {
          yellow: '#f3ba2f',
          dark: '#0b0d10',
          panel: '#11151b',
          border: '#1f2630'
        }
      }
    }
  },
  plugins: []
}
