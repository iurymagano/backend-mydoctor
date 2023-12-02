import { Request, Response } from "express";
import { GetIDEnderecosService } from "../../services/enderecos/GetIDEnderecosService";

class GetIDEnderecosController {
  async handle(req: Request, res: Response) {
    const body = req.body;

    const enderecoService = new GetIDEnderecosService();

    const endereco = await enderecoService.execute(body);

    return res.json(endereco);
  }
}

export { GetIDEnderecosController };
