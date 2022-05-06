import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/node-mailer-mail-adapter";
import { PrismaFeedbackRepository } from "./Repositories/prisma/prisma-feedback-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

 export const routes = express.Router()


// const transport = nodemailer.createTransport({
//     host: "smtp.mailtrap.io",
//     port: 2525,
//     auth: {
//       user: "a91b572accc3f8",
//       pass: "09e9695481c50e"
//     }
//   });



routes.post("/feedbacks", async (req, res) => {
  const { type, coment, screenshot } = req.body;

const prismaFeedbackRepository = new PrismaFeedbackRepository()
const nodemailerMailAdapter = new NodemailerMailAdapter()

const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbackRepository,nodemailerMailAdapter)



await submitFeedbackUseCase.execute({
  type,
  coment,
  screenshot
})
 

  // await transport.sendMail({
  //     from: 'Equipe feedget <emailteste@teste.com>',
  //     to: 'Lucas Neder <geada_n@hotmail.com>',
  //     subject:'Novo feedback',
  //     html:[
  //         `<div styles="font-family:sans-serif;font-size:16px;color:#111">`,
  //         `<p>Tipo de feedback: ${type} </p> `,
  //         `<p>Comentario: ${coment} </p>`,
  //         `</div>`

  //     ].join('')
  // })

  return res.status(201).send();
});