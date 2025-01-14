import { Router, Request, Response } from 'express';
import { UserModel } from '@ascendere/intefaces';

export const userRouter = Router();

//Find User by Id

userRouter.get('/usuario/:id', (request: Request, response: Response) => {
  const id = request.params.id;

  UserModel.findById(id, (err, usuarioDB) => {
    if (err) return response.status(500).json({ ok: false, ...err });
    if (!usuarioDB)
      return response
        .status(404)
        .json({ ok: false, err: { message: `User with id ${id} not found.` } });
    return response.status(200).json({
      ok: true,
      usuario: usuarioDB
    });
  });
});

// Create new User

userRouter.post('/usuario', (request: Request, response: Response) => {
  const body = request.body;
  let newUser = new UserModel({
    name: body.name,
    lastName: body.lastName,
    birthDate: body.birthDate,
    nationality: body.nationality,
    ci: body.ci,
    email: body.email,
    phoneNumber: body.phoneNumber,
    role: body.role
  });
  newUser.save({}, (err, user) => {
    if (err) return response.status(500).json({ ok: false, ...err });
    return response.status(200).json({
      ok: true,
      usuario: user
    });
  });
});

// Update an user

userRouter.put('/usuario/:id', (request: Request, response: Response) => {
  const id = request.params.id;
  const rawBody = request.body;

  const options = {
    new: true,
    runValidators: true
  };

  const body = {
    name: rawBody.name,
    lastName: rawBody.lastName,
    ci: rawBody.ci,
    email: rawBody.email
  };
  // clean body from null | undefined values
  for (var propName in body) {
    if (body[propName] === null || body[propName] === undefined) {
      delete body[propName];
    }
  }
  UserModel.findById(id, options).exec((err, userDB) => {
    if (err) return response.status(500).json({ ok: false, ...err });
    if (!userDB)
      return response
        .status(404)
        .json({ ok: false, err: { message: `User with id:${id} not found!` } });
    for (const key in body) {
      userDB[key] = body[key];
    }
    userDB.save();
    response.status(200).json({
      ok: true,
      usuario: userDB
    });
  });
});
