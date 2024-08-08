// import { Repository } from 'typeorm';
// import { User } from '../entities/User';
// import { AppDataSource } from '../config/database';

// export class UserService {
//   private userRepository: Repository<User> = AppDataSource.getRepository(User);

//   async getAllUsers(): Promise<User[]> {
//     return this.userRepository.find();
//   }

//   async createUser(user: User): Promise<User> {
//     return this.userRepository.save(user);
//   }
// }


import { User } from '../entities/User';
import { AppDataSource } from '../config/database';
import { UserRepository } from '../repositories/UserRepository'; // Adjust the import path as necessary

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository(AppDataSource);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(user: User): Promise<User> {
    return this.userRepository.saveUser(user);
  }
}
