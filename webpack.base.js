const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [
  new MiniCssExtractPlugin({
    filename: "styles.css"
  })
]

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.?js?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ],
      },
    ],
  },
  plugins
};
