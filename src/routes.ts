import { Router } from "express";
import { upload } from "./config/multer";
import { CreateUsuarioController } from "./controllers/usuarios/CreateUsuarioController";
import { UpdateUsuarioControler } from "./controllers/usuarios/UpdateUsuarioController";
import { isAuthenticated } from "./middlewares/IsAuthticated";
import { AuthController } from "./controllers/usuarios/AuthController";
import { GetProfissionalController } from "./controllers/profissional/ListaProfissionalController";
import { UpdateProfissionalController } from "./controllers/profissional/UpdateProfissionalController";
import { UpdatePacientesController } from "./controllers/pacientes/UpdatePacientesController";
import { GetByPacientesController } from "./controllers/pacientes/GetByPacientesController";
import { GetLikesPacienteController } from "./controllers/pacientes/GetLikesPacienteController";
import { CreateLikePacienteController } from "./controllers/pacientes/CreateLikePacienteController";
import { DeleteLikePacienteController } from "./controllers/pacientes/DeleteLikePacienteController";
import { CreateProntuariosController } from "./controllers/prontuarios/CreateProntuariosController";
import { ListaProntuarioController } from "./controllers/prontuarios/ListaProntuarioController";
import { UpdateProntuariosController } from "./controllers/prontuarios/UpdateProntuariosController";
import { DeleteProntuariosController } from "./controllers/prontuarios/DeleteProntuariosController";
import { CreateEnderecosController } from "./controllers/enderecos/CreateEnderecosController";
import { UpdateEnderecosController } from "./controllers/enderecos/UpdateEnderecosController";
import { DeleteEnderecosController } from "./controllers/enderecos/DeleteEnderecosController";
import { GetIDEnderecosController } from "./controllers/enderecos/GetIDEnderecosController";
import { CreateMensagensController } from "./controllers/mensagens/CreateMensagensController";
import { SendEmailController } from "./controllers/sendEmailController/SendEmailController";
import { UploadCloudinaryController } from "./controllers/uploadCloudinary/UploadCloudinaryController";
import { CreateAgendaProfissionalController } from "./controllers/agendaProfissional/agendaProfissionalController";

const router = Router();

/**------ Usuarios ------- */
router.post("/usuario", new CreateUsuarioController().handle);
router.put("/usuario", isAuthenticated, new UpdateUsuarioControler().handle);

/**------ login ------- */
router.post("/login", new AuthController().handle);

/**------ Profissional ------- */
router.post(
  "/search/profissional",
  isAuthenticated,
  new GetProfissionalController().handle
);

router.put(
  "/profissional",
  isAuthenticated,
  new UpdateProfissionalController().handle
);

/**------ Pacientes ------- */
router.put(
  "/pacientes",
  isAuthenticated,
  new UpdatePacientesController().handle
);
router.post(
  "/search/id/pacientes",
  isAuthenticated,
  new GetByPacientesController().handle
);

router.post(
  "/search/like/pacientes",
  isAuthenticated,
  new GetLikesPacienteController().handle
);

router.post(
  "/like/pacientes",
  isAuthenticated,
  new CreateLikePacienteController().handle
);

router.delete(
  "/like/pacientes",
  isAuthenticated,
  new DeleteLikePacienteController().handle
);

/**------ Prontuarios ------- */
router.post(
  "/prontuarios",
  isAuthenticated,
  new CreateProntuariosController().handle
);
router.post(
  "/lista/prontuarios",
  isAuthenticated,
  new ListaProntuarioController().handle
);

router.put(
  "/prontuarios",
  isAuthenticated,
  new UpdateProntuariosController().handle
);
router.delete(
  "/prontuarios",
  isAuthenticated,
  new DeleteProntuariosController().handle
);

/**------ Enderecos ------- */
router.post(
  "/enderecos",
  isAuthenticated,
  new CreateEnderecosController().handle
);

router.put(
  "/enderecos",
  isAuthenticated,
  new UpdateEnderecosController().handle
);
router.delete(
  "/enderecos",
  isAuthenticated,
  new DeleteEnderecosController().handle
);
router.post(
  "/id/enderecos",
  isAuthenticated,
  new GetIDEnderecosController().handle
);

/**------ Mensagens ------- */
router.post(
  "/mensagens",
  isAuthenticated,
  new CreateMensagensController().handle
);

/**------ SendEmail ------- */
router.post("/sendemail", isAuthenticated, new SendEmailController().handle);

/**------ AgendaProfissional ------- */

router.post(
  "/agendaprofissional",
  isAuthenticated,
  new CreateAgendaProfissionalController().handle
);

/**------ Upload Images ------- */
router.post(
  "/images/upload",
  isAuthenticated,
  upload.single("file"),
  new UploadCloudinaryController().handle
);

export { router };
