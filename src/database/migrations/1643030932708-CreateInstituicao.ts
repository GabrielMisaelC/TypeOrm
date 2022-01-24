import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateInstituicao1643030932708 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "Tb_Instituicao",
                columns:[
                    {
                        name: "Id_Instituicao",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "Nome_Instituicao",
                        type: "varchar"
                    },
                    {
                        name: "Status_Instituicao",
                        type: "boolean"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("Tb_Instituicao");
    }

}
