export type CampaignType = {
  name: string;
  description: string;
  amount: number;
  status: string;
};

export type DonationType = {
  campaignId: string;
  name: string;
  amount: number;
  state: string;
};
