'use strict'

var format = function format(string) {
  return string
    .split(' ')
    .map(function(s) {
      return s.replace(/^\w/, function(s) {
        return s.toUpperCase()
      })
    })
    .join(' ')
}

var addLink = function addLink(options) {
  var fonts = options.fonts
    .map(format)
    .join('|')
    .replace(' ', '+')
  var link = document.head.appendChild(document.createElement('link'))
  link.href = 'https://fonts.googleapis.com/css?family=' + fonts
  link.rel = 'stylesheet'
}

exports.onClientEntry = function(nothing, options) {
  if (options.fonts && options.fonts.length > 0) {
    addLink(options)
  } else {
    console.warn('Please add at least one font family to options.fonts')
  }
}
