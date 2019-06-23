import * as express from 'express';

import * as mongoose from 'mongoose';
import { MongoError } from 'mongodb';
import * as bodyParser from 'body-parser';

export default class Server {
  public app: express.Application;
  public port: any;

  /**
   * Create new Express server, and define some middleware
   */
  constructor() {
    this.port = process.env.PORT || 3000;
    this.app = express();

    // bodyParser use
    this.app.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.app.use(bodyParser.json());
  }

  listen(callback?: Function) {
    this.app.listen(this.port, callback());

    this.connectToMongo();
  }

  private connectToMongo() {
    mongoose.connect(
      'mongodb://localhost:27017/encuentros',
      { useNewUrlParser: true },
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
