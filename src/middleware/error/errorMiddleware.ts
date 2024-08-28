import { Request, Response, NextFunction } from 'express';
import { AppError } from './appError';

const errorMiddleware = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err); // Log the error for debugging

  // Handle AppError
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      status: err.statusCode,
      message: err.message,
    });
  }

  // Handle unexpected errors
  res.status(500).json({
    status: 500,
    message: 'Internal Server Error',
  });
};

export default errorMiddleware;
