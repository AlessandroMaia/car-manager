import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDataBase1627355339927 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createDatabase("car_manager", true)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropDatabase("car_manager", true)
    }

}
