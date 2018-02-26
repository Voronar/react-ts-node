/**
 * Dev
 */
import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import devConfig from 'webpack/devConfig';

export function handleDevelopment(app: express.Application) {
  console.log(devConfig);
}
