import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsuario1643030913605 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Tb_Usuario",
                columns:[
                    {
                        name: "Id_Usuario",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "Nome_Usuario",
                        type: "varchar"
                    },
                    {
                        name: "Cpf_Usuario",
                        type: "varchar"
                    },
                    {
                        name: "Email_Usuario",
                        type: "varchar"
                    },
                    {
                        name: "Senha_Usuario",
                        type: "varchar"
                    },
                    {
                        name: "Status_Usuario",
                        type: "boolean"
                    },
                    {
                        name: "Cargo_Usuario",
                        type: "varchar"
                    },
                    { 
                        name: "Categoria_Usuario",
                        type: "varchar"
                    },
                    {
                        name: "Data_Cadastro_Usuario",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "Foto_Usuario",
                        type: "varchar"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Tb_Usuario");
    }

}
