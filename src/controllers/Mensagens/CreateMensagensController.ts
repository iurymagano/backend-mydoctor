import { Request, Response } from "express";
import { CreateMensagensService } from "../../services/Mensagens/CreateMensagensService";

class CreateMensagensController {
  async handle(req: Request, res: Response) {
    const body = req.body;

    const mensagensService = new CreateMensagensService();

    const mensagens = await mensagensService.execute(body);

    return res.json(mensagens);
  }
}

export { CreateMensagensController };
