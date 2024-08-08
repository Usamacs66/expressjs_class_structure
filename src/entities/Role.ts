import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Role {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column({ nullable: true })
  roleName: string;

  constructor(roleName: string) {
    this.roleName = roleName;
  }
}
