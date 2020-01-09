'use strict'

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function format(string) {
  return string
    .split(' ')
    .map(function(s) {
      return s.replace(/^\w/, function(s) {
        return s.toUpperCase()
      })
    })
    .join(' ')
}

function getFonts(options) {
  return options.fonts
    .map(format)
    .join('|')
    .replace(/ /g, '+')
}

function getDisplay(options) {
  return options.display ? '&display=' + options.display : ''
}

exports.onRenderBody = function(_ref, options) {
  var setHeadComponents = _ref.setHeadComponents

  var link = 'https://fonts.googleapis.com/css?family=' + getFonts(options) + getDisplay(options)
  setHeadComponents([
    _react2.default.createElement('link', {
      key: 'fonts',
      href: link,
      rel: 'stylesheet'
    })
  ])
}
