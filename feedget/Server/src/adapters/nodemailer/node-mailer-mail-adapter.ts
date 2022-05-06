import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "a91b572accc3f8",
    pass: "09e9695481c50e",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe feedget <emailteste@teste.com>",
      to: "Lucas Neder <geada_n@hotmail.com>",
      subject: subject,
      html: body
    });
  }
}
