import { getCustomRepository } from "typeorm";
import { UsuarioRepositories } from "../repositories/UsuarioRepositories";

interface IUsuarioRequest {
    Nome_Usuario: string;
    Cpf_Usuario: string;
    Email_Usuario: string;
    Senha_Usuario: string;
    Status_Usuario: boolean;
    Cargo_Usuario: string; 
    Categoria_Usuario: string;
    Foto_Usuario: string;
}

class CreateUsuarioService {
    async execute({Nome_Usuario, Cpf_Usuario, Email_Usuario, Senha_Usuario, Status_Usuario, Cargo_Usuario, Categoria_Usuario, Foto_Usuario} : IUsuarioRequest){
        const usuarioRepository = getCustomRepository(UsuarioRepositories);

        if(!Cpf_Usuario){
            throw new Error("CPF Incorreto");
        }
        const usuarioAlreadyExists = await usuarioRepository.findOne({
            Cpf_Usuario,
        });
        if (usuarioAlreadyExists){
            throw new Error("Usuario Já Existe");
        }
        if(!Email_Usuario){
            throw new Error("E-mail Incorreto");
        }

        const usuario = usuarioRepository.create({
            Nome_Usuario,
            Cpf_Usuario,
            Email_Usuario,
            Senha_Usuario,
            Status_Usuario,
            Cargo_Usuario,
            Categoria_Usuario,
            Foto_Usuario
        });

        await usuarioRepository.save(usuario);

        return usuario;
    }
}

export { CreateUsuarioService };