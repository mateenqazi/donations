import { Router, Response, Request } from 'express';
import { DonationService } from '../services/donation.service';

export class DonationController {
  public router: Router;
  public donationService: DonationService;

  constructor() {
    this.router = Router();
    this.donationService = new DonationService();
    this.routes();
  }

  public donationSpecificCampaign = async (req: Request, res: Response) => {
    const { data } = req.body;
    const result = await this.donationService.donateAtSpecificCampaign(data);
    res.json(result);
  };

  public routes() {
    this.router.post('/details', this.donationSpecificCampaign);
  }
}
