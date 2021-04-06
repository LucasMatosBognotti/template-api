import dotenv from 'dotenv';
import express from 'express';

import routes from './routes';

dotenv.config({
  path:
    process.env.NODE_ENV === 'development'
      ? '.env.development'
      : '.env.production',
});

const app = express();

app.use(express.json());

app.use(routes);

export default app;
