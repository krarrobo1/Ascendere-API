import Server from './app/server';
import { encuentrosRouter } from './routes/encuentros-crud.routes';
import { montlyEncuentrosRouter } from './routes/encuentros-extras.routes';

const server = new Server();

server.app.use('/encuentros-service', [
  encuentrosRouter,
  montlyEncuentrosRouter
]);

server.listen(() => {
  console.log(`Listening at port ${server.port}`);
});
