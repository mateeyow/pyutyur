const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./pages/**/*.js', './components/**/*.js'],
  defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('postcss-url')({ url: 'inline' }),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
