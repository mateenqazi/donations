/* eslint-disable */
require('custom-env').env(true);
require('dotenv').config();
import cors from 'cors';
import express from 'express';
import flash from 'express-flash';
import dbConfig from './db/ormconfig';
import { createConnection } from 'typeorm';
import { APP_CONFIG } from './config/app.config';
import { CampaignController } from './controllers/campaign.controller';
import { DonationController } from './controllers/donation.controller';

/* eslint-enable */

class Server {
  private campaignController: CampaignController = new CampaignController();
  private donationController: DonationController = new DonationController();
  private app: express.Application;

  constructor() {
    this.app = express(); // init the application
    this.configuration();
    this.routes();
  }

  /**
   * Configure the server
   */
  public configuration() {
    this.app.set('port', APP_CONFIG.PORT || 3001);
    this.app.use(express.json());
    this.app.use(flash());
  }

  /**
   * Configure the routes
   */
  public async routes() {
    this.app.use(
      cors({
        origin: 'http://localhost:3000'
      })
    );
    createConnection(dbConfig);
    this.app.use(`/api/campaign/`, this.campaignController.router);
    this.app.use(`/api/donation/`, this.donationController.router);
  }

  /**
   * start the server
   */
  public start() {
    this.app.listen(this.app.get('port'), () => {
      console.log(`Server is listening ${this.app.get('port')} port.`);
    });
  }
}

const server = new Server();
server.start();
