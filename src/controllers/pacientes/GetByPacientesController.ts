import { Request, Response } from "express";
import { GetByPacienteService } from "../../services/pacientes/GetByPacienteService";

class GetByPacientesController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    const pacienteService = new GetByPacienteService();

    const paciente = await pacienteService.execute({ id });

    return res.json(paciente);
  }
}

export { GetByPacientesController };
