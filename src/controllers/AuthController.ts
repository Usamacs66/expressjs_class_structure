import { Request, Response } from 'express';
import { AuthService } from '../services/AuthService';

export class AuthController {
  private authService = new AuthService();

  async register(req: Request, res: Response): Promise<Response> {
    const { email, password, firstName, lastName } = req.body;
    const user = await this.authService.register(email, password, firstName, lastName);
    return res.status(201).json(user);
  }

  async login(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;
    const token = await this.authService.login(email, password);
    if (token) {
      return res.json({ token });
    }
    return res.status(401).json({ message: 'Invalid credentials' });
  }
}
