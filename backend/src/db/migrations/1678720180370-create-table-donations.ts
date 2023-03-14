import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class donation1678720180370 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'donations',
        columns: [
          {
            name: 'id',
            type: 'varchar(255)',
            isPrimary: true
          },
          {
            name: 'name',
            type: 'varchar'
          },
          {
            name: 'data_version',
            type: 'int'
          },
          {
            name: 'state',
            type: 'varchar'
          },
          {
            name: 'amount',
            type: 'int'
          },
          {
            name: 'campaign_id',
            type: 'varchar'
          },
          {
            name: 'create_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          },
          {
            name: 'update_at',
            type: 'timestamp',
            isNullable: true
          }
        ]
      }),
      true
    );
  }

  public async down(): Promise<void> {}
}
