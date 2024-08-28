import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Role } from "./Role";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  firstName!: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  email!: string;
  
  @Column()
  passwordHash!: string; // Store hashed password

  @ManyToOne(() => Role, role => role.users)
  role!: Role;
}
