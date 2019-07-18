/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import { userRouter } from './app/routes/usuarios-crud.routes';
import {
  IndevExpressServer,
  IndevDatabase
} from '@ascendere/indev-express-server';

const server = new IndevExpressServer({
  PORT: Number(process.env.PORT) || 3000,
  DATABASE: IndevDatabase.mongoDB,
  DB_URI: 'mongodb://localhost:27017/ascendere',
  USE_BODYPARSER: true
});

server.app.use('/usuarios-service', [userRouter]);

server.listen();
