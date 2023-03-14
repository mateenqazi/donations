import { Repository, EntityRepository, getRepository } from 'typeorm';
import { CampaignEntity } from '../entities/campaign.entity';
import { CampaignType } from '../types/CommonTypes';

@EntityRepository(CampaignEntity)
export class CampaignRepository extends Repository<CampaignEntity> {
  async getAllEntities(): Promise<CampaignEntity[]> {
    const repository = getRepository(CampaignEntity);
    const result =
      (await repository
        .createQueryBuilder('campaigns')
        .where('campaigns.status = :status', { status: 'active' })
        .getMany()) || [];
    return result;
  }

  async insert(data: CampaignType): Promise<any> {
    const repository = getRepository(CampaignEntity);
    const result = await repository.create(data);
    result.save();
    return result;
  }
}
