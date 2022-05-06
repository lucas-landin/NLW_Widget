import { MailAdapter } from "../adapters/mail-adapter";
import { FeedbackRepository } from "../Repositories/feedback-repository";

export interface SubmitFeedbackUseCaseRequest {
  type: string;
  coment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor( private feedbackRepository: FeedbackRepository,
    private mailAdapter: MailAdapter
    ) {}

  async execute(request: SubmitFeedbackUseCaseRequest) {
    const { type, coment, screenshot } = request;

    await this.feedbackRepository.create({
      type,
      coment,
      screenshot,
    })

    await this.mailAdapter.sendMail({
      subject:'Novo Feedback',
      body: [
        `<div styles="font-family:san-serif;font-size:16px;color:#111">`,
          `<p>Tipo de feedback:${type}</p>`,
          `<p>Comentário:${coment}</p>`,
           `</div>`
      ].join('')
    })


  }

  

}
