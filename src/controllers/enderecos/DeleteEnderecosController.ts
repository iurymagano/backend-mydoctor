import { Request, Response } from "express";
import { DeleteEnderecosService } from "../../services/enderecos/DeleteEnderecosService";

class DeleteEnderecosController {
  async handle(req: Request, res: Response) {
    const body = req.body;

    const enderecoService = new DeleteEnderecosService();

    const endereco = await enderecoService.execute(body);

    return res.json(endereco);
  }
}

export { DeleteEnderecosController };
