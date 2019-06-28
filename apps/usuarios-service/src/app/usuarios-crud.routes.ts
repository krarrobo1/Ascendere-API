import { Router, Request, Response } from 'express';
import { UserModel } from '@ascendere/intefaces';

export const userRouter = Router();

//Find User by Id

userRouter.get('/usuario/:id', (request: Request, response: Response) => {
  const id = request.params.id;

  UserModel.findById(id, (err, usuarioDB) => {
    if (err) response.status(500).json({ ok: false, ...err });
    if (!usuarioDB)
      response
        .status(404)
        .json({ ok: false, err: { message: `User with id ${id} not found.` } });
    response.status(200).json({
      ok: true,
      usuario: usuarioDB
    });
  });
});

// Create new User

userRouter.post('/usuario', (request: Request, response: Response) => {
  const body = request.body;

  let newUser = new UserModel({});
});
