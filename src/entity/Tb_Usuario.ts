import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Tb_Usuario")
class Tb_Usuario {

    @PrimaryColumn()
    readonly Id_Usuario: string;
    @Column()
    Nome_Usuario: string;
    @Column()
    Cpf_Usuario: string;
    @Column()
    Email_Usuario: string;
    @Column()
    Senha_Usuario: string;
    @Column()
    Status_Usuario: boolean;
    @Column()
    Cargo_Usuario: string;
    @Column()
    Categoria_Usuario: string;
    @CreateDateColumn()
    Data_Cadastro_Usuario: Date;
    @Column()
    Foto_Usuario: string;

    constructor() {
        if(!this.Id_Usuario){
            this.Id_Usuario = uuid();
        }
    }
}

export { Tb_Usuario };