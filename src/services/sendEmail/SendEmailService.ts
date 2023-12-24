import { templatesEmail } from "../../utils/templatesEmail";
import nodemailer from "nodemailer";

interface SendEmailRequest {
  to: string;
  subject: string;
  type: string;
  body: any;
}

class SendEmailService {
  async execute({ to, subject, type, body }: SendEmailRequest) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    try {
      await transporter.sendMail({
        to,
        subject,
        html: templatesEmail({ type, body }),
      });
      return { respData: "Email enviado com sucesso. -" };
    } catch (error) {
      return { error: error, result: "Falha no envio do email" };
    }
  }
}

export { SendEmailService };
