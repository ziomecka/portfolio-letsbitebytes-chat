module.exports = {
  mode: 'development',
  resolve: {
    mainFiles: ['index'],
    modules: [ 'node_modules' ],
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, loader: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  }
};