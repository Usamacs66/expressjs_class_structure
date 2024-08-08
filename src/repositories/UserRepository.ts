import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/User';

export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
   
  async saveUser(user: User): Promise<User> {
    return this.save(user);
  }
  // Add custom repository methods here if needed
}
