/**
 * Server entry point
 */
import * as express from 'express';
// import * as path from 'path';

import { handleDevelopment } from 'server/utils/dev/handleDevelopment';

const app = express();

if (process.env.NODE_ENV === 'development') {
  handleDevelopment(app);
}

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
