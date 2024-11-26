
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: ["./src/index.jsx"],
  module: {
    rules: [
      {
        test: /.jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-react'] }
        }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
        ],
      }
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: 'src/index.html', to: 'index.html' },
        { from: "src/assets", to: "assets" },
        { from: "src/outerwebpack.js", to: "outerwebpack.js" }
      ],
    }),
  ],
  devServer: {
    static: { directory: path.join(__dirname, 'dist') },
    watchFiles: ["src/**/*"],
    port: 3000
  }
};