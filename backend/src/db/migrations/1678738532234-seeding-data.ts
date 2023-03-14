import { MigrationInterface, QueryRunner } from 'typeorm';
import { CampaignEntity } from '../../entities/campaign.entity';
import { campaignsData } from '../data';

export class seedData1678738532234 implements MigrationInterface {
  name = 'seedData1678738532234';

  public async up(queryRunner: QueryRunner): Promise<void> {
    const connection = queryRunner.connection;
    const campaignRepository = connection.getRepository(CampaignEntity);
    for (let index = 0; index < campaignsData.length; index++) {
      const data = campaignsData[index];
      await campaignRepository.save({ ...data, ...new CampaignEntity() });
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('delete from `donations`');
  }
}
