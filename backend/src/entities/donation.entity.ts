/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import { Column, Entity, ManyToOne } from 'typeorm';
import { IsString } from 'class-validator';
import { BaseCollection } from './base.entity';
import { CampaignEntity } from './campaign.entity';

@Entity('donations')
export class DonationEntity extends BaseCollection {
  @Column({ nullable: false })
  @IsString()
  name: string;

  @Column({ nullable: false, default: 'valid' })
  @IsString()
  state: string;

  @Column({ nullable: false })
  campaignId: string;

  @Column({ nullable: false })
  @IsString()
  amount: number;

  @ManyToOne(() => CampaignEntity, (campaigns) => campaigns.id, {
    cascade: true
  })
  campaigns: CampaignEntity[];
}
