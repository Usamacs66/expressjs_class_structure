import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/AuthService';
import { AppError } from './error/appError';
import asyncHandler from './error/asyncHandler';

const authService = new AuthService();

 export const authenticateToken = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];

  if (token == null) throw new AppError("not authenticated",401);

  const user = await authService.authenticate(token);
  if (user == null) throw new AppError("forbiden",403)


  req.user = user; // Attach user to request

  next();
});
