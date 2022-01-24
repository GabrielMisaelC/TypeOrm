import { request, Request, Response } from "express";
import { CreateUsuarioService } from "../services/CreateUsuarioService"

class CreateUsuarioController {
    async handle(request: Request, response: Response) {
        const {Nome_Usuario, Cpf_Usuario, Email_Usuario, Senha_Usuario, Status_Usuario, Cargo_Usuario, Categoria_Usuario, Foto_Usuario} = request.body;

        const createUsuarioService = new CreateUsuarioService();

        const usuario = await createUsuarioService.execute({Nome_Usuario, Cpf_Usuario, Email_Usuario, Senha_Usuario, Status_Usuario, Cargo_Usuario, Categoria_Usuario, Foto_Usuario})

        return response.json(usuario);
    }
}

export { CreateUsuarioController }