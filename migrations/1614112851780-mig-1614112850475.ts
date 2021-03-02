import { MigrationInterface, QueryRunner } from 'typeorm';

export class mig16141128504751614112851780 implements MigrationInterface {
  name = 'mig16141128504751614112851780';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      'CREATE TABLE `user` (`id` varchar(36) NOT NULL, `createDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedDateTime` datetime(6) NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `isActive` tinyint NOT NULL DEFAULT 1, PRIMARY KEY (`id`)) ENGINE=InnoDB'
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('DROP TABLE `user`');
  }
}
