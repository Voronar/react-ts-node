/**
 * Webpack utils
 */

import * as path from 'path';

export const getSrcPath = () => path.join(
  __dirname,
  '..',
);

export const CLIENT_APP_ENTRY = path.join(
  getSrcPath(),
  'client',
  'index.tsx',
);
