import { Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("Tb_Instituicao")
class Tb_Instituicao{


    @PrimaryColumn()
    readonly Id_Instituicao: string;
    @Column()
    Nome_Instituicao: string;
    @Column()
    Status_Instituicao: boolean;

    constructor() {
        if(!this.Id_Instituicao){
            this.Id_Instituicao = uuid();
        }
    }
}

export { Tb_Instituicao };