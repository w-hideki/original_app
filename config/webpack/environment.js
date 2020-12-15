const { environment } = require('@rails/webpack')
const webpack = require('webpack')

environment.plugins.prepend('Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    jQuery: 'jquery/src/jquery'
    Popper: ['popper.js', 'default']
  }))
module.exports = environment
