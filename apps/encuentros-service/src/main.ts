import Server from './app/server';
import { encuentrosRouter } from './app/encuentros.route';

const server = new Server();

server.app.use(encuentrosRouter);

server.listen(() => {
  console.log(`Listening at http://localhost:${server.port}/api`);
});
