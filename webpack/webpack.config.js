const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js',
    },
    resolve: {
      extensions: ['js','ts','tsx']
    },
    module: {
        'rules': [
            {
                test: '/\.tsx?$/', loader: 'ts-loader',
            },
        ],
    },
    plugins: [
      new CleanWebpackPlugin()
    ]
};