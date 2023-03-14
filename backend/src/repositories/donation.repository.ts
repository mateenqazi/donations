import { Repository, EntityRepository, getRepository } from 'typeorm';
import { CampaignEntity } from '../entities/campaign.entity';
import { DonationEntity } from '../entities/donation.entity';
import { DonationType } from '../types/CommonTypes';

@EntityRepository(DonationEntity)
export class DonationRepository extends Repository<DonationEntity> {
  async getAllEntities(): Promise<DonationEntity[]> {
    const repository = getRepository(DonationEntity);
    const result =
      (await repository.createQueryBuilder('campaigns').getMany()) || [];
    return result;
  }

  async donationAdded(data: DonationType): Promise<any> {
    const repository = getRepository(DonationEntity);
    if (data.name === 'MarkDonatorAsFraud') {
      this.makeCampaignFraud(data.campaignId);
      return true;
    }
    const result = await repository.create(data);
    await result.save();
    return await this.getAmountOfCampaign(data.campaignId);
  }

  async getAmountOfCampaign(id: string): Promise<any> {
    const repositoryCampaign = getRepository(CampaignEntity);
    const repository = getRepository(DonationEntity);

    const campaign = await repositoryCampaign.findOne(id, {
      select: ['amount']
    });

    const amount = await repository
      .createQueryBuilder('donations')
      .select('SUM(donations.amount)', 'totalAmount')
      .where('donations.campaignId = :campaignId', { campaignId: id })
      .getRawOne();

    if (campaign && campaign?.amount <= amount?.totalAmount) {
      campaign.status = 'successful';
      await repositoryCampaign.update(id, campaign);
      return true;
    }
    return false;
  }

  async makeCampaignFraud(id: string): Promise<any> {
    const repositoryCampaign = getRepository(CampaignEntity);
    const repository = getRepository(DonationEntity);

    await repository
      .createQueryBuilder('donations')
      .update(DonationEntity)
      .set({ state: 'fraud' })
      .where({ campaignId: id })
      .execute();

    const campaign = await repositoryCampaign.findOne(id);

    if (campaign) {
      campaign.status = 'fraud';
      await repositoryCampaign.update(id, campaign);
    }
  }
}
