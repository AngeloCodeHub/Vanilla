
import path from 'path';
import CopyPlugin from 'copy-webpack-plugin';
import webpack from 'webpack';
import 'webpack-dev-server';


const config: webpack.Configuration = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { modules: true } },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'public') },
      ],
    }),
  ],
  devServer: {
    port: 3000
  },
}

export default config;
