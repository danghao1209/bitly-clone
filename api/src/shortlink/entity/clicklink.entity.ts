import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ShortLink } from './shortlink.entity';

@Entity({ name: 'shortlink' })
export class ClickLink {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  short_link_id: string;

  @Column({ type: 'varchar', length: 40 })
  UA: string;

  @Column({ type: 'varchar' })
  IP: string;

  @JoinColumn({ name: 'short_link_id' })
  @ManyToOne(() => ShortLink, (qr) => qr.clicks)
  clicks: ShortLink;

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
