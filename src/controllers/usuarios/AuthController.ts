import { Request, Response } from "express";
import { AuthUsuarioservice } from "../../services/usuarios/AuthUsuarioService";

class AuthController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;

    const authController = new AuthUsuarioservice();

    const auth = await authController.execute({
      email,
      password,
    });

    return res.json(auth);
  }
}

export { AuthController };
