const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  devtool: false,
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all'
        },
      },
    },
  },
  plugins: [
    new CompressionPlugin({
      algorithm: 'gzip',
      test: /\.js(\?.*)?$/i,
      deleteOriginalAssets: true
    }),
  ],
};
