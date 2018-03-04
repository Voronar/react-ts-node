/**
 * Webpack loaders
 */
export const ts = {
  test: /\.tsx?$/,
  use: [
    {
      loader: 'ts-loader',
      options: {},
    },
  ],
  exclude: /node_modules/,
};

export const images = {};
export const fonts = {};
