import React from 'react'

const format = string =>
  string
    .split(' ')
    .map(s => s.replace(/^\w/, s => s.toUpperCase()))
    .join(' ')

const getFonts = options =>
  options.fonts
    .map(format)
    .join('|')
    .replace(/ /g, '+')

exports.onRenderBody = ({ setHeadComponents }, options) => {
  const link = 'https://fonts.googleapis.com/css?family=' + getFonts(options)
  setHeadComponents([
    React.createElement('link', { key: 'fonts', href: link, rel: 'stylesheet' })
  ])
}
