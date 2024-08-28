import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { User } from "./User"; 

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ nullable: true })
  roleName!: string;

  @OneToMany(() => User, user => user.role)
  users!: User[];

  constructor(roleName: string) {
    this.roleName = roleName;
  }
}
