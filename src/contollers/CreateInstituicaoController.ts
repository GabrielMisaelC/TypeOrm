import { request, Request, Response } from "express";
import { CreateInstituicaoService } from "../services/CreateInstituicaoService"

class CreateInstituicaoController {
    async handle(request: Request, response: Response) {
        const {Nome_Instituicao, Status_Instituicao} = request.body;

        const createInstituicaoService = new CreateInstituicaoService();

        const instituicao = await createInstituicaoService.execute({Nome_Instituicao, Status_Instituicao});

        return response.json(instituicao);
    }
}

export { CreateInstituicaoController }