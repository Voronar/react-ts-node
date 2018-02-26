/**
 * Server entry point
 */
import * as express from 'express';
import * as path from 'path';

import { handleDevelopment } from 'server/utils/development';

const app = express();

if (process.env.NODE_ENV === 'development') {
  handleDevelopment(app);
}
