import prismaClient from "../../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUsuarioservice {
  async execute({ email, password }: AuthRequest) {
    if (!email || !password) {
      throw new Error("Obrigatorio email e password");
    }
    const user = await prismaClient.usuarios.findFirst({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error("Email/Password inválido.");
    }

    const passowordMatch = await compare(password, user.password);
    if (!passowordMatch) {
      throw new Error("Email/Password inválido.");
    }

    const token = sign(
      {
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        subject: user.id.toString(),
        expiresIn: "30d",
      }
    );
    const data = {
      id: user.id,
      email: user.email,
      typeUser: user.typeUser,
      token,
    };

    const typeTableUser =
      user.typeUser === "PROFISSIONAL" ? "profissional" : "pacientes";
    //@ts-ignore
    const respTable = await prismaClient[typeTableUser].findFirst({
      where: {
        usuario_id: user.id,
      },
    });
    if (respTable) {
      //@ts-ignore
      data.typeUsuario = respTable;
    }

    return {
      respData: data,
    };
  }
}

export { AuthUsuarioservice };
