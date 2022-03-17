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
  productionSourceMap: false,
};
