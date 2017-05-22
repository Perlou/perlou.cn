const path = require('path')
// const webpack = require('webpack')
// const apiConfig

module.exports = {
  cache: {
    max: 20,
    maxAge: 600000
  },
  loading: {
    color: '#2196f3'
  },
  build: {
    extend (webpackConfig) {
      webpackConfig.resolve.alias['~utils'] = path.join(__dirname, 'utils')
      webpackConfig.resolve.alias['~static'] = path.join(__dirname, 'static')
      webpackConfig.resolve.alias['~filters'] = path.join(__dirname, 'filters')
      webpackConfig.resolve.alias['~services'] = path.join(__dirname, 'services')
      webpackConfig.module.rules.push({
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!sass-loader'
      })
    },
    vendor: [
      'axios',
      'howler',
      'swiper',
      'marked',
      'gravatar',
      'particles.js',
      'clipboard',
      'highlight.js'
    ],
    babel: {
      presets: ['es2015', 'stage-2'],
      plugins: [
        'transform-async-to-generator',
        'transform-runtime'
      ],
      comments: true
    }
  },

  dev: (process.env.NODE_ENV !== 'production'),
  // env: {
  //   baseUrl:
  // }

  plugins: [
    { src: '~plugins/particles.js', ssr: false }
  ],

  head: {
    title: 'Perlou.cn',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'cleartype', content: 'on' },
      { name: 'author', content: 'perloukevin@gmail.com' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' }
    ]
  }
}

