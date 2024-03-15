import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ClickQR } from './clickqr.entity';

@Entity({ name: 'qr' })
export class QR {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar' })
  user_id: string;

  @Column({ type: 'varchar', length: 40 })
  original_link: string;

  @Column({ type: 'varchar' })
  short_link: string;

  @Column({ type: 'varchar' })
  image_link: string;

  @Column({ type: 'varchar' })
  title: string;

  @OneToMany(() => ClickQR, (clickQR) => clickQR.id)
  clicks: ClickQR[];

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
