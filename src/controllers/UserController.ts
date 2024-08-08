import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { User } from '../entities/User';

export class UserController {
  private userService = new UserService();

  async getUsers(req: Request, res: Response): Promise<Response> {
    const users = await this.userService.getAllUsers();
    return res.json(users);
  }

  async createUser(req: Request, res: Response): Promise<Response> {
    const user = req.body as User;
    const newUser = await this.userService.createUser(user);
    return res.status(201).json(newUser);
  }
}
