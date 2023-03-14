import { Router, Response, Request } from 'express';
import { CampaignService } from '../services/campaign.service';

export class CampaignController {
  public router: Router;
  public userService: CampaignService;

  constructor() {
    this.router = Router();
    this.userService = new CampaignService();
    this.routes();
  }

  public getAllCampaign = async (req: Request, res: Response) => {
    const result = await this.userService.getAllCampaign();
    res.json(result);
  };

  public routes() {
    this.router.get('/getAllCampaign', this.getAllCampaign);
  }
}
