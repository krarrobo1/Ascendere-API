import Server from './app/server';
// import { encuentrosRouter } from './app/encuentros.route';

const server = Server.init(3000);

// server.app.use(encuentrosRouter);

server.start(() => {
  console.log(`Listening at http://localhost:${server.port}/api`);
});
