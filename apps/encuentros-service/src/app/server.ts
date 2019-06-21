import * as express from 'express';

import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';

export default class Server {
  public app: express.Application;
  public port: number;

  private constructor(port: number) {
    this.port = port;
    this.app = express();
  }

  static init(port: number) {
    return new Server(port);
  }

  start(callback?: Function) {
    this.app.listen(this.port, callback());

    this.connectToMongo();
  }

  private connectToMongo() {
    mongoose.connect(
      'mongodb://localhost:27017/encuentros',
      (err: MongoError) => {
        if (!!err) {
          throw Error(
            'Error while connecting to mongodb. Mongo not connected.'
          );
        }
      }
    );
  }
}
