import { getCustomRepository } from "typeorm";
import { InstituicaoRepositories } from "../repositories/InstituicaoRepositories";

interface IInstituicaoResquest{
    Nome_Instituicao: string;
    Status_Instituicao: boolean;
}

class CreateInstituicaoService {
    async execute({Nome_Instituicao, Status_Instituicao} : IInstituicaoResquest) {
        const instituicaoRespository = getCustomRepository(InstituicaoRepositories);

        if (!Nome_Instituicao){
            throw new Error("Nome Incorreto");
        }

        const instituicao = instituicaoRespository.create({
            Nome_Instituicao,
            Status_Instituicao
        });

        await instituicaoRespository.save(instituicao);

        return instituicao;
    }
}

export { CreateInstituicaoService };