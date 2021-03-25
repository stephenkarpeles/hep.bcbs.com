const postCssImport = require('postcss-import');
const postCssAdvancedVariables = require('postcss-advanced-variables');
const postCssNested = require('postcss-nested');
const postCssCssNext = require('postcss-cssnext');
const postCsshexRgba = require('postcss-cssnext');
const postCssPxtoRem = require('postcss-pxtorem');
const postCssMixins = require('postcss-mixins');

module.exports = {
  plugins: {
    'postcss-import': {}, // Add support for sass-like '@import'
    'postcss-mixins': {},
    'postcss-advanced-variables': {}, // ability to add loops
    'postcss-nested': {}, // Add support for sass-like nesting of rules
    'postcss-cssnext': {
      features: {
        nesting: false,
        rgba: false,
        customProperties: false
      }
    },
    'postcss-hexrgba': {}, // Convert hex values in rgba()
    'postcss-pxtorem': {
      rootValue: 16, // Root font-size
      unitPrecision: 5, // Round rem units to 4 digits
      propList: ['font', 'font-size', 'letter-spacing', 'text-indent', 'padding', 'padding-top', 'padding-right', 'padding-left', 'padding-bottom', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'width', 'min-width', 'max-width', 'height', 'min-height', 'max-height', 'border-radius', 'top', 'left', 'right', 'bottom'],
      selectorBlackList: ['html'],
      replace: true, // Replace pixels with rems
      mediaQuery: false, // Ignore media queries
      minPixelValue: 4, // Minimal pixel value that will be processed
      exclude: /node_modules/i
    },
  },
}
