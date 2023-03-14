import { DonationRepository } from '../repositories/donation.repository';
import { DonationType } from '../types/CommonTypes';

export class DonationService {
  private donationRepository: DonationRepository;

  constructor() {
    this.donationRepository = new DonationRepository();
  }

  public donateAtSpecificCampaign = async (data: DonationType) => {
    return await this.donationRepository.donationAdded(data);
  };
}
