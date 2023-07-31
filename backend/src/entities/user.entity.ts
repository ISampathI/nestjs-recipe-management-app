import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Recipe } from './recipe.entity';
import { Password } from './password.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;
  
  @OneToMany(() => Password, (password) => password.user)
  passwords?: Password[];


  @OneToMany(() => Recipe, (recipe) => recipe.user)
  recipes: Recipe[];
}
