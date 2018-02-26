/**
 * Dev
 */
import * as path from 'path';
import * as webpack from 'webpack';

const APP_ENTRY: string = path.join('..', 'client', 'index.tsx');

const devConfig: webpack.Configuration = {
  entry: [
    'webpack-hot-middleware/client',
    APP_ENTRY,
  ],
  output: {
    filename: 'app[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts?x$/,
        use: [
          {
            loader: 'ts-loader',
            options: {},
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
};

export default devConfig;
