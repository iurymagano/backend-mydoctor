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
      console.error("Erro ao enviar o e-mail:", error);
      throw new Error("Erro ao enviar o e-mail");
    }
  }
}

export { SendEmailService };
