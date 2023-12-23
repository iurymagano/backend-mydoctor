import prismaClient from "../../prisma";
import { sign } from "jsonwebtoken";
import { SendEmailService } from "./SendEmailService";

interface SendEmailRequest {
  email: string;
}

class SendEmailNewPassService {
  async execute({ email }: SendEmailRequest) {
    if (!email) {
      throw new Error("Obrigatorio email");
    }

    const user = await prismaClient.usuarios.findFirst({
      where: {
        email,
      },
    });
    if (!user) {
      throw new Error("Nenhum usuario encontrado");
    }
    const typeUser =
      "PROFISSIONAL" === user.typeUser ? "profissional" : "pacientes";

    const token = sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET_NEW_PASS,
      {
        subject: user.id.toString(),
        expiresIn: "10m",
      }
    );
    //@ts-ignore
    const userTypeTable = await prismaClient[typeUser].findFirst({
      where: {
        email,
      },
    });

    const body = {
      nome: userTypeTable?.nome,
      token,
    };

    const respSend = new SendEmailService().execute({
      body,
      type: "sendchangepass",
      to: email,
      subject: "Alteração de senha",
    });

    return respSend;
  }
}

export { SendEmailNewPassService };
