import { request, response, Router } from "express";
import { CreateUsuarioController } from "./contollers/CreateUsuarioController";
import { CreateInstituicaoController } from "./contollers/CreateInstituicaoController";

const router = Router();

const createInstituicaoController = new CreateInstituicaoController();
const createUsuarioController  = new CreateUsuarioController();

router.post("/usuario", createUsuarioController.handle);
router.post("/instituicao", createInstituicaoController.handle);

export { router };
