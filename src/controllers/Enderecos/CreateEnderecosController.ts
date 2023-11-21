import { Request, Response } from "express";
import { CreateEnderecosService } from "../../services/Enderecos/CreateEnderecosService";

class CreateEnderecosController {
  async handle(req: Request, res: Response) {
    const body = req.body;

    const enderecoService = new CreateEnderecosService();

    const endereco = await enderecoService.execute(body);

    return res.json(endereco);
  }
}

export { CreateEnderecosController };
