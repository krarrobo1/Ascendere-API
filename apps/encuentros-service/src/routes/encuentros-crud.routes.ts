import { Router, Request, Response } from 'express';
import { EncuentroModel } from '@ascendere/intefaces';

export const encuentrosRouter = Router();

/**
 * **Create New Encuentro**
 * Obtain all `encuentros` to be presented as a Portfolio
 */
encuentrosRouter.post('/encuentros', (request: Request, response: Response) => {
  const body = request.body;

  // TODO: add arts
  // TODO: add speakers
  let encuentro = new EncuentroModel({
    name: body.name,
    content: body.content,
    date: body.date,
    postulationsEndDate: body.postulationsEndDate,
    limitOfPeople: body.limitOfPeople,
    encuentroType: body.encuentroType
  });

  encuentro.save((err, res) => {
    if (err) return response.status(400).json({ ok: false, ...err });

    response.json({ oK: true, message: 'Encuentro created Successfully' });
  });
});
