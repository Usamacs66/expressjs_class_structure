import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import asyncHandler from '../middleware/error/asyncHandler';
import { UserRequest } from '../types/model/User';

export class UserController {
  private userService = new UserService();

  getUsers = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
    const users = await this.userService.getAllUsers();
    return res.json(users);
  });

  createUser = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
    const user = req.body as UserRequest;
    const newUser = await this.userService.createUser(user);
    return res.status(201).json(newUser);
  });
}
