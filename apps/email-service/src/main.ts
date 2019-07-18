/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { IndevExpressServer } from '@ascendere/indev-express-server';
import { sender } from './app/email-utils';

const server = new IndevExpressServer({
  PORT: Number(process.env.PORT) || 3000,
  USE_BODYPARSER: true
});

server.app.use('/email-service', [sender]);
server.listen();
