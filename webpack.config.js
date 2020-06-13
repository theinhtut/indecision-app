const path = require('path');
const webpack = require('webpack');
require('dotenv').config({ path: '.env.development' });

module.exports = {
  entry: './src/app.js',
  output: {
      path: path.join(__dirname,'public'),
      filename: 'bundle.js'
  },
  module: {
      rules: [{
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
      }]
  },
  plugins: [
    new webpack.EnvironmentPlugin(['SUPABASE_API_URL', 'SUPABASE_KEY'])
  ],
  devtool: 'cheap-module-eval-source-map',
  devServer: {
      contentBase: path.join(__dirname,'public')
  }
};

