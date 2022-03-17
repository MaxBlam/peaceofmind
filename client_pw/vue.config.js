const path = require('path');

module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          test: /.(avif)$/i,

          use: [{ loader: 'file-loader' }],
        },
      ],
    },
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'public/service-worker.js',
    },
  },
  outputDir: path.resolve(__dirname, '../server/public'),
  productionSourceMap: false,
};
