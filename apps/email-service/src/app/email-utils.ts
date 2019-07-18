import { Router, Request, Response } from 'express';
import * as nodemailer from 'nodemailer';

export const sender = Router();

sender.post('/sender', (request: Request, response: Response) => {
  let rawBody = request.body;
  let mail: Mail = {
    to: rawBody.to,
    subject: rawBody.subject,
    message: rawBody.message
  };

  for (const key in mail) {
    if (mail[key] === null || mail[key] === undefined)
      return response.status(500).json({
        ok: false,
        err: {
          message: `No se pudo enviar el Email, se requiere: ${key}`
        }
      });
  }
  sendEmail(mail, response);
});

// Nota: Activar el acceso desde aplicaciones, google config...
async function sendEmail(mail: Mail, response: Response) {
  try {
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      service: 'google',
      auth: {
        user: 'krac.corp@gmail.com', // generated ethereal user
        pass: 'krarrobo98' // generated ethereal password
      }
    });

    let mailOptions = {
      from: '"Ascendere Team 👻" <ascendere@example.com>', // sender address
      to: mail.to,
      subject: mail.subject, // Subject line
      text: mail.message // plain text body
      //html: '<p> Example </p>
    };
    let confirmation = await transporter.sendMail(mailOptions);

    return response.status(200).json({ ok: true, msg: confirmation.response });
  } catch (err) {
    return response.status(500).json({ ok: false, ...err });
  }
}

interface Mail {
  to: String;
  subject: String;
  message: String;
}
