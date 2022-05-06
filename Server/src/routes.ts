import express from "express";
import { NodemailerMailAdapter } from "./adapters/nodemailer/node-mailer-mail-adapter";
import { PrismaFeedbackRepository } from "./Repositories/prisma/prisma-feedback-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

 export const routes = express.Router()






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
 

  

  return res.status(201).send();
});