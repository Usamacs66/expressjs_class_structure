import express from 'express';
import { json } from 'body-parser';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';
import errorMiddleware from './middleware/error/errorMiddleware';

const app = express();

app.use(json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use(errorMiddleware);
export default app;
