import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';
import asyncHandler from '../middleware/error/asyncHandler';

export class AuthController {
  private authService = new AuthService();

  register = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
    const { email, password, firstName, lastName } = req.body;
    const user = await this.authService.register(email, password, firstName, lastName);
    return res.status(201).json(user);
  });

  login = asyncHandler(async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;
    const token = await this.authService.login(email, password);
    if (token) {
      return res.json({ token });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  });
}
