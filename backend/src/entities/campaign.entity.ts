/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import { Column, Entity, OneToMany } from 'typeorm';
import { IsString } from 'class-validator';
import { BaseCollection } from './base.entity';
import { DonationEntity } from './donation.entity';

@Entity('campaigns')
export class CampaignEntity extends BaseCollection {
  @Column({ nullable: false })
  @IsString()
  name: string;

  @Column({ nullable: false })
  @IsString()
  description: string;

  @Column({ nullable: false })
  @IsString()
  amount: number;

  @Column({ nullable: false })
  @IsString()
  status: string;

  @OneToMany(() => DonationEntity, (donations) => donations.id, {
    cascade: true
  })
  donations: DonationEntity;
}
