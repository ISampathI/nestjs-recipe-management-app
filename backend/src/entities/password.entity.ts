import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  RelationId,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Password {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @RelationId((password: Password) => password.user)
  @Column()
  userId: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => User, (user) => user.passwords, { onDelete: 'CASCADE' })
  user: User;
}
