module.exports = {
  pwa: {
    name: 'pwa onesignal',
    themeColor: '#303237',
    workboxOptions: {
      exclude: [/\.map$/, /_redirects/, /OneSignal.*\.js$/],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/styles/main.scss";
          `,
      },
    },
  },
  lintOnSave: false,
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(svg)(\?.*)?$/,
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                limit: 10000,
                name: 'assets/img/[name].[hash:7].[ext]',
              },
            },
          ],
        },
      ],
    },
  },
  chainWebpack: config => {
    config.module
      .rule('svg')
      .test(() => false)
      .use('file-loader');
  },
};
