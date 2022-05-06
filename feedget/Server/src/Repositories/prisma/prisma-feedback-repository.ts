import { prisma } from "../../prisma";
import { FeedbackCreateData, FeedbackRepository } from "../feedback-repository";



export class PrismaFeedbackRepository implements FeedbackRepository{
 async create ({type,coment,screenshot}: FeedbackCreateData){
    await prisma.feedback.create({
        data: {
          type,
          coment,
          screenshot,
        },
    
      });
  }
}