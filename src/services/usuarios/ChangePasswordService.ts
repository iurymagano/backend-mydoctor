import prismaClient from "../../prisma";
import { compare, hash } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  password: string;
  id: number;
}

class ChangePasswordService {
  async execute({ id, password }: AuthRequest) {
    if (!id) {
      throw new Error("not found id");
    }
    if (!password) {
      throw new Error("Password Obrigatorio");
    }

    const passwordHash = await hash(password, 8);
    if (!passwordHash) {
      throw new Error("Email/Password inválido.");
    }

    const user = await prismaClient.usuarios.update({
      where: {
        id,
      },
      data: {
        password: passwordHash,
      },
    });

    if (!user) {
      throw new Error("Não foi possivel alterar a senha ");
    }

    return {
      result: "Success",
      respData: {},
    };
  }
}

export { ChangePasswordService };
