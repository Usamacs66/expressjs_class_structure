import { User } from '../entities/User';
import { AppDataSource } from '../config/database';
import { UserRepository } from '../repositories/UserRepository'; // Adjust the import path as necessary
import { RoleRepository } from '../repositories/RoleRepository';
import { AppError } from '../middleware/error/appError';
import { UserRequest } from '../types/model/User';

export class UserService {
  private userRepository: UserRepository;
  private roleRepository: RoleRepository;

  constructor() {
    this.userRepository = new UserRepository(AppDataSource);
    this.roleRepository = new RoleRepository(AppDataSource);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async createUser(user: UserRequest): Promise<User> {
    const role =  await this.roleRepository.getRoleById(user.roleId)
    if (!role) {
        throw new AppError(`Role with ID ${user.roleId} not found`,404);
      }
      let postUser = new User()
      postUser.email=user.email
      postUser.firstName=user.firstName
      postUser.lastName=user.lastName
      postUser.passwordHash = user.password
      postUser.role = role
    return await this.userRepository.saveUser(postUser);
  }
}
