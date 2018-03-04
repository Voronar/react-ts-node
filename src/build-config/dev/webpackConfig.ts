/**
 * Webpack dev config
 */
import * as path from 'path';
import * as webpack from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

import * as loaders from 'build-config/dev/loaders';
import { CLIENT_APP_ENTRY, getSrcPath } from 'build-config/utils';

export const HMR_OPTS = {
  path: '/__webpack_hmr',
};

const webpackConfig: webpack.Configuration & { mode: string } = {
  // context: __dirname,
  mode: 'development',
  devtool: 'inline-source-map',
  entry: [
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    CLIENT_APP_ENTRY,
  ],
  output: {
    filename: 'app[[hash]].js',
    publicPath: '/',
  },
  module: {
    rules: [
      loaders.ts,
    ],
  },
  resolve: {
    modules: [
      'node_modules',
      getSrcPath(),
    ],
    extensions: [
      '.ts',
      '.tsx',
      '.js',
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(getSrcPath(), 'assets', 'index.html'),
      inject: 'body',
      filename: 'index.html',
    }),
  ],
};

export default webpackConfig;
