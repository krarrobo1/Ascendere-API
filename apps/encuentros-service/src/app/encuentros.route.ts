import { Router, Request, Response } from 'express';
import { EncuentroModel } from "@ascendere/intefaces";

export const encuentrosRouter = Router();

encuentrosRouter.get(
  '/api/encuentros',
  (request: Request, response: Response) => {
    response.json({ oK: true, message: 'Hello Encuentros' });
  }
);

encuentrosRouter.post(
  '/api/encuentros',
  (request: Request, response: Response) => {
    console.log(request.body);

    let encuentro = new EncuentroModel({name: 'bruno'}).save((err, res) => {
      response.json({ oK: true, res, err });
    });
  }
);
