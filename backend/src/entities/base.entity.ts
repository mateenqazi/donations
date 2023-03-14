/* eslint-disable indent */
/* eslint-disable @typescript-eslint/indent */
import {
  BaseEntity,
  CreateDateColumn,
  PrimaryColumn,
  UpdateDateColumn,
  VersionColumn
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

export abstract class BaseCollection extends BaseEntity {
  @PrimaryColumn('uuid', { name: 'id' })
  id: string;

  @CreateDateColumn({ type: 'timestamp', precision: 6 })
  createAt: Date;

  @UpdateDateColumn({ type: 'timestamp', precision: 6 })
  updateAt: Date;

  @VersionColumn()
  dataVersion: number;

  constructor() {
    super();
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
