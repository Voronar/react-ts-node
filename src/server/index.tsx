/**
 * Server entry point
 */
import * as express from 'express';
import * as fs from 'fs';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import * as path from 'path';

import { handleDevelopment } from 'server/utils/dev/handleDevelopment';
import { App } from 'client/components/App';

const app = express();

if (process.env.NODE_ENV === 'development') {
  handleDevelopment(app);
}

const index = fs.readFileSync(
  path.join(__dirname, '..', 'assets', 'index.html'),
  'utf8',
);

app.get('*', (req, res) => {
  const reactMarkup = renderToString(
    <App data={'fromServer123'}/>,
  );

  const indexMarkup = index.replace('<!--ssr-markup-->', reactMarkup);

  console.log('SERVER:', indexMarkup);
  res.send(indexMarkup);
});

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
