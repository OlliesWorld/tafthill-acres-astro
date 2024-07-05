module.exports = {
  plugins: [
    require('postcss-nesting'), // add this line
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}