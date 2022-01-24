import { EntityRepository, Repository } from "typeorm";
import { Tb_Instituicao } from "../entity/Tb_Instituicao";

@EntityRepository(Tb_Instituicao)
class InstituicaoRepositories extends Repository<Tb_Instituicao>{}

export { InstituicaoRepositories }