import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class AccountsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  permission: string;
}