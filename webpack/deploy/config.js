const webpack = require('webpack');

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
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  ]
};