import prismaClient from "../../prisma";
import { hash } from "bcryptjs";
import { CreatePacientesService } from "../pacientes/CreatePacientesService";
import { CreateProfissionalService } from "../profissional/CreateProfissionalService";
import { SendEmailService } from "../sendEmail/SendEmailService";

interface UserRequest {
  nome: string;
  email: string;
  password: string;
  typeUser: "PACIENTE" | "PROFISSIONAL";
}

class CreateUsuarioService {
  async execute({ nome, email, typeUser, password }: UserRequest) {
    const typesIsRequired = ["PROFISSIONAL", "PACIENTE"];
    if (!email) {
      throw new Error("Email é Obrigátorio");
    }
    if (!nome) {
      throw new Error("Nome é Obrigátorio");
    }

    if (!typesIsRequired.includes(typeUser)) {
      throw new Error("Selecionar type obrigado " + typesIsRequired.toString());
    }

    if (!password) {
      throw new Error("Password Obrigatorio");
    }

    const userAldeadyExist = await prismaClient.usuarios.findFirst({
      where: {
        email,
      },
    });

    if (userAldeadyExist) {
      throw new Error("Email já existente.");
    }

    const passwordHash = await hash(password, 8);
    const user = await prismaClient.usuarios.create({
      data: {
        email,
        password: passwordHash,
        typeUser,
      },
      select: {
        id: true,
        email: true,
        typeUser: true,
      },
    });

    if (user.id && typeUser === "PROFISSIONAL") {
      const createProfissionalService = new CreateProfissionalService();
      await createProfissionalService.execute({
        nome,
        email,
        usuario_id: user.id,
      });
    }

    if (user.id && typeUser === "PACIENTE") {
      const createPacientesService = new CreatePacientesService();
      await createPacientesService.execute({
        nome,
        email,
        usuario_id: user.id,
      });
    }

    const resp = await new SendEmailService().execute({
      body: { nome },
      to: email,
      subject: "Bem-Vindo ao Mydoctor",
      type: `newuser_${typeUser}`,
    });

    return { respData: user, email: resp };
  }
}

export { CreateUsuarioService };
