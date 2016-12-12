const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'eval-source-map',

  entry: './src/index',

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/'
  },

  resolve: {
    root: __dirname,
    alias: {
      App: 'src/components/App.js',
      configureStore: 'src/redux/store/configureStore.js',
      reducers: 'src/redux/reducers/index.js',
      actions: 'src/redux/actions/index.js',
      LocalStore: 'src/api/index.js',
      routes: 'src/routes.js',
      stylesheet: 'src/styles/stylesheet.scss'
    },
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: { presets: ['es2015', 'react', 'stage-1'] },
        test: /\.jsx?$/,
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url'
      },
      {
        test: /\.(json)$/,
        loader: 'json'
      }
    ]
  }
};
