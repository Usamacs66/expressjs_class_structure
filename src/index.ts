import 'reflect-metadata';
import { AppDataSource } from './config/database';
import app from './app';

const startServer = async () => {
  try {
    await AppDataSource.initialize();
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  } catch (error) {
    console.error('Error connecting to the database', error);
  }
};

startServer();
