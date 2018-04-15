const path = require('path')

module.exports = {
  chainWebpack: (config) => {
    config
      .module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        options.loaders.scss = options.loaders.scss.concat({
          loader: 'sass-resources-loader',
          options: {
            resources: path.resolve('./src/sass/_variables.scss')
          }
        })
        return options
      })

    config
      .module
      .rule('scss')
      .use('sass-resources-loader')
      .loader('sass-resources-loader')
      .options({
        resources: path.resolve('./src/sass/_variables.scss')
      })
  }
}
