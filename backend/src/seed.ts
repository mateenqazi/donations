/* eslint-disable import/first */
/* eslint-disable quotes */
require('custom-env').env(true);
require('dotenv').config();
import { createConnection } from 'typeorm';
import { CampaignEntity } from './entities/campaign.entity';
import dbConfig from './db/ormconfig';

async function seed () {

  const connection = await createConnection(dbConfig);

  const campaignRepository = connection.getRepository(CampaignEntity);

  const usersToSeed = [
    {
      name: 'Campaign 1',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 200,
      status: 'active'
    },
    {
      name: 'Campaign 2',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 500,
      status: 'active'
    },
    {
      name: 'Campaign 3',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 800,
      status: 'active'
    },
    {
      name: 'Campaign 4',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 1000,
      status: 'active'
    },
    {
      name: 'Campaign 5',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 1200,
      status: 'active'
    },
    {
      name: 'Campaign 6',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 300,
      status: 'active'
    },
    {
      name: 'Campaign 7',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 400,
      status: 'active'
    },
    {
      name: 'Campaign 8',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 600,
      status: 'active'
    },
    {
      name: 'Campaign 9',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 700,
      status: 'active'
    },
    {
      name: 'Campaign 10',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 350,
      status: 'active'
    },
    {
      name: 'Campaign 11',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 200,
      status: 'active'
    },
    {
      name: 'Campaign 12',
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      amount: 200,
      status: 'active'
    }
  ];

  await campaignRepository.insert(usersToSeed);

  await connection.close();
}

seed()
  .then(() => console.log('Seed successful'))
  .catch((error) => console.error('Seed failed', error));
