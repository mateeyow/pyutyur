const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    fontFamily: {
      body: ['Poppins', '-apple-system', 'sans-serif'],
      headers: ['Oswald', '-apple-system', 'sans-serif'],
    },
    colors: {
      primary: 'var(--color-primary)',
      primaryHover: 'var(--color-primary-hover)',
      lineGray: 'var(--color-lineGray)',
      textGray: 'var(--color-textGray)',
      anchor: '#2d9cdb',
    },
    minHeight: {
      cover: 'calc(100vh - 64px - 96px)',
    },
    maxHeight: {
      cover: 'calc(100vh - 64px - 96px)',
    },
    extend: {
      colors: {
        ...colors,
        gray: {
          ...colors.gray,
          100: '#F9F9F9',
        },
      },
      gridTemplateColumns: {
        layout: '280px 1fr',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover', 'focus', 'active'],
    borderColor: ['responsive', 'hover', 'focus', 'active'],
    transitionProperty: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};
