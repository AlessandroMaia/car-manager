import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateCars1627449587511 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "carros",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true
                    },
                    {
                        name: "nome",
                        type: "varchar"
                    },
                    {
                        name: "km_por_galao",
                        type: "varchar"
                    },
                    {
                        name: "cilindros",
                        type: "varchar"
                    },
                    {
                        name: "peso",
                        type: "varchar"
                    },
                    {
                        name: "aceleracao",
                        type: "varchar"
                    },
                    {
                        name: "ano",
                        type: "varchar"
                    },
                    {
                        name: "origem",
                        type: "varchar"
                    },
                    {
                        name: "marca_id",
                        type: "varchar"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKMarcaDoCarro",
                        referencedTableName: "marcas",
                        referencedColumnNames: ["id"],
                        columnNames: ["marca_id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("carros");
    }

}
