import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number = 0;

  @Column()
  firstName!: string;

  @Column({ nullable: true })
  lastName?: string;

  @Column()
  email!: string;
  
  @Column()
  passwordHash!: string; // Store hashed password
}
