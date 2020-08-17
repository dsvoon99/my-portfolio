const path = require('path');

module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'assets'),
  },
    module: {
        rules: [
        {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
            presets: ['@babel/preset-env']
            }
        }
        }
    ]
    },
    devServer: {
      contentBase: './assets',
    },
};