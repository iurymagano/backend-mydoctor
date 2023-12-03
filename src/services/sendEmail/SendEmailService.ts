import { templatesEmail } from "../../utils/templatesEmail";

const nodemailer = require("nodemailer");

interface SendEmailRequest {
  to: string;
  subject: string;
  type: string;
  body: any;
}

class SendEmailService {
  execute({ to, subject, type, body }: SendEmailRequest) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });
    transporter.sendMail({
      to,
      subject,
      html: templatesEmail({ type, body }),
    });

    return { respData: "Email enviado com sucesso." };
  }
}

export { SendEmailService };
