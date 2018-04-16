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
  },

  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: 'dev/service-worker.js'
      // ...other Workbox options...
    }
  }
}
