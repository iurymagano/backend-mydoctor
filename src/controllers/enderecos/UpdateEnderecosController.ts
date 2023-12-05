import { Request, Response } from "express";
import { UpdateEnderecosService } from "../../services/enderecos/UpdateEnderecosService";

class UpdateEnderecosController {
  async handle(req: Request, res: Response) {
    const body = req.body;

    const enderecoService = new UpdateEnderecosService();

    const endereco = await enderecoService.execute(body);

    return res.json(endereco);
  }
}

export { UpdateEnderecosController };
