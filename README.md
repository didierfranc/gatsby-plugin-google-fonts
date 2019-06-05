# gatsby-plugin-google-fonts

## How to use it ?

```js
yarn add gatsby-plugin-google-fonts
// or
npm install gatsby-plugin-google-fonts --save
```

Add some fonts to your `gatsby-config.js`:

```js
module.exports = {
  siteMetadata: {
    title: `I like Google fonts`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `limelight`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      }
    }
  ]
}
```


## How to find great ideas ?

- https://fonts.google.com
- http://fontpair.co/
