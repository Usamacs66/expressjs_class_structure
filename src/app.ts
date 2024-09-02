import express from 'express';
import { json } from 'body-parser';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import errorMiddleware from './middleware/error/errorMiddleware';
import { AppError } from './middleware/error/appError';

const app = express();

app.use(json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use((req, res, next) => {
    next(new AppError('Not Found', 404));
  });
app.use(errorMiddleware);
export default app;
