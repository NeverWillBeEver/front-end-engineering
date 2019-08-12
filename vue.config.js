const path = require('path');
const webpack = require('webpack');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const productionGzipExtensions = ['js', 'css'];
const nodeExternals = require('webpack-node-externals');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: './',
  outputDir: process.env.VUE_APP_OUTPUTDIR,

  configureWebpack: {
    resolve: {
      extensions: ['.ts', '.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        'vue$': 'vue/dist/vue.esm.js',
        'components': resolve('src/components'),
        'config': resolve('src/config'),
        'directives': resolve('src/directives'),
        'mock': resolve('src/mock'),
        'modules': resolve('src/modules'),
        'plugins': resolve('src/plugins'),
        'routes': resolve('src/routes'),
        'service': resolve('src/service'),
        'utils': resolve('src/utils'),
        'views': resolve('src/views'),
        'packages': resolve('packages')
      }
    },
    plugins: [
      new CompressionWebpackPlugin({
        algorithm: 'gzip',
        test: new RegExp(
          '\\.(' +
          productionGzipExtensions.join('|') +
          ')$'
        ),
        threshold: 10240,
        minRatio: 0.8
      }),
    ],
    // externals: process.env.NODE_ENV === 'test' ? [nodeExternals()] : {
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'vuex': 'Vuex',
    //   'axios': 'axios'
    // }
    // externals: process.env.NODE_ENV === 'test' ? [nodeExternals()] : {}
  },

  devServer: {
    clientLogLevel: 'warning',
    compress: true,
    // contentBase: false, // since we use CopyWebpackPlugin.
    // host: '',
    hot: true,
    open: true,
    openPage: '',
    port: '9999',
    disableHostCheck: true,
    overlay: {
      warnings: true,
      errors: true
    },
    proxy: {
      '/path/start/with': {
        target: process.env.VUE_APP_PROXY_PATH,
        changeOrigin: true
      },
    },
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/custom/var.scss";'
      },
      postcss: {
        ident: 'postcss',
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 51.2,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: ['tips-for-remedial-classes']
          })
        ]
      }
    }
  },

  chainWebpack: config => {
    config.plugin('fork-ts-checker').tap(([options]) => {
      return [{
        async: false,
        tslint: true,
        vue: true
      }]
    }),
      config.module
        .rule('svga')
        .test(/\.svga$/)
        .use('file-loader')
        .loader('file-loader')
        .end()
  }
};
