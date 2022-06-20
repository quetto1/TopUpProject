

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  base: '/home',
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/top-up-project/'
    : '/'
})
