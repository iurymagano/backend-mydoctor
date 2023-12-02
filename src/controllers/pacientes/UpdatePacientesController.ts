import { Request, Response } from "express";
import { UpdatePacientesService } from "../../services/pacientes/UpdatePacientesService";

class UpdatePacientesController {
  async handle(req: Request, res: Response) {
    const { id, nome, email, image, telefone, endereco_id, documento } =
      req.body;

    const updatePacientesService = new UpdatePacientesService();

    const list = await updatePacientesService.execute({
      id,
      nome,
      email,
      telefone,
      endereco_id,
      documento,
      image,
    });

    return res.json(list);
  }
}

export { UpdatePacientesController };
