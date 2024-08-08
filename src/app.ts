import express from 'express';
import { json } from 'body-parser';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(json());
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);

export default app;
