import { Request, Response } from "express";
import { GetLikesPacienteService } from "../../services/pacientes/GetLikesPacienteService";

class GetLikesPacienteController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const pacienteService = new GetLikesPacienteService();

    const paciente = await pacienteService.execute({
      id,
    });

    return res.json(paciente);
  }
}

export { GetLikesPacienteController };
