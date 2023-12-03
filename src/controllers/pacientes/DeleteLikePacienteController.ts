import { Request, Response } from "express";
import { DeleteLikePacienteService } from "../../services/pacientes/DeleteLikePacienteService";

class DeleteLikePacienteController {
  async handle(req: Request, res: Response) {
    const { profissional_id, paciente_id } = req.body;

    const pacienteService = new DeleteLikePacienteService();

    const paciente = await pacienteService.execute({
      profissional_id,
      paciente_id,
    });

    return res.json(paciente);
  }
}

export { DeleteLikePacienteController };
