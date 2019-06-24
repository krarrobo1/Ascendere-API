import Server from './app/server';
import { encuentrosRouter } from './routes/encuentros-crud.routes';
import { montlyEncuentrosRouter } from './routes/encuentros-extras.routes';
import { inscripcionEncuentroRouter } from './routes/inscripcion-encuentro.routes';

const server = new Server();

server.app.use('/encuentros-service', [
  encuentrosRouter,
  montlyEncuentrosRouter,
  inscripcionEncuentroRouter
]);

server.listen(() => {
  console.log(`Listening at port ${server.port}`);
});
