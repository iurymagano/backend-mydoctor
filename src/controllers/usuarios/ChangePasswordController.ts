import { Request, Response } from "express";
import { ChangePasswordService } from "../../services/usuarios/ChangePasswordService";

class ChangePasswordController {
  async handle(req: Request, res: Response) {
    const { password } = req.body;
    const userID = Number(req.userID);
    const changeUsuarioservice = new ChangePasswordService();

    const user = await changeUsuarioservice.execute({
      id: userID,
      password,
    });

    return res.json(user);
  }
}

export { ChangePasswordController };
