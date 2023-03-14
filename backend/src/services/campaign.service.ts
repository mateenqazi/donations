import { CampaignRepository } from '../repositories/campaign.repository';

export class CampaignService {
  private campaignRepository: CampaignRepository;

  constructor() {
    this.campaignRepository = new CampaignRepository();
  }

  public getAllCampaign = async () => {
    return await this.campaignRepository.getAllEntities();
  };
}
