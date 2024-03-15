import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { QR } from './qr.entity';

@Entity({ name: 'shortlink' })
export class ClickQR {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  qr_id: string;

  @Column({ type: 'varchar', length: 40 })
  UA: string;

  @Column({ type: 'varchar' })
  IP: string;

  @JoinColumn({ name: 'qr_id' })
  @ManyToOne(() => QR, (qr) => qr.clicks)
  qr: QR;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}
