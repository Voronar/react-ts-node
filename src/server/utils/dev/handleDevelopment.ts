/**
 * Dev
 */
import * as path from 'path';
import * as express from 'express';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from 'build-config/dev/webpackConfig';

export function handleDevelopment(app: express.Application) {
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    headers: { 'Access-Control-Allow-Origin': '*' },
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
    logLevel: 'warn',
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));

  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', '..', 'index.html'));
  });
}
