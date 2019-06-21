// import { Router, Request, Response } from 'express';


// export const encuentrosRouter = Router();

// encuentrosRouter.get(
//   '/api/encuentros',
//   (request: Request, response: Response) => {
//     response.json({ oK: true, message: 'Hello Encuentros' });
//   }
// );

// encuentrosRouter.post(
//   '/api/encuentros',
//   (request: Request, response: Response) => {
//     console.log(request.body);

//     let encuentro = new EncuentroModel({name: 'bruno'}).save((err, res) => {
//       response.json({ oK: true, res, err });
//     });
//   }
// );


// let myUser = new User({ name: 'a', mail: 'aaa@aaa.com' })
// Users.create(myUser, (err: any, doc: UserDocument) => {
//    if (err) { ... }
//    console.log(doc._id) // id at DB
//    console.log(doc.name) // a
//    doc.foo() // works :)
// })
