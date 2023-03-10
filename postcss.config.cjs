// https://github.com/postcss/postcss-mixins
// https://github.com/antyakushev/postcss-for
// https://github.com/madyankin/postcss-each
// https://github.com/postcss/postcss-nested
// https://github.com/postcss/postcss-simple-vars
// https://github.com/nathanhood/postcss-variables
// https://github.com/andyjansson/postcss-conditionals
// https://github.com/csstools/postcss-custom-selectors
// https://github.com/postcss/postcss-scss
// https://github.com/mummybot/postcss-strip-inline-comments
// https://github.com/postcss/postcss-import


// Fork of `postcss-simple-vars` to fix issue with `@each`
// @ts-ignore
const simpleVariables = require('./custom-postcss/postcss-simple-vars/index.js')

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    'postcss-strip-inline-comments',
    'postcss-import',
    simpleVariables,
    'postcss-conditionals',
    'postcss-mixins',
    'postcss-for',
    'postcss-each',
    'postcss-nested',
    'postcss-custom-media',
    'postcss-media-minmax',
    'postcss-custom-selectors',
  ]
}
