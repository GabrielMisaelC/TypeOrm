import { EntityRepository, Repository } from "typeorm";
import { Tb_Usuario } from "../entity/Tb_Usuario";

@EntityRepository(Tb_Usuario)
class UsuarioRepositories extends Repository<Tb_Usuario>{}

export { UsuarioRepositories }