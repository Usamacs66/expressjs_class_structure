// import { DataSource } from 'typeorm';
// import { User } from '../entities/User';
// import * as dotenv from 'dotenv';

// dotenv.config();

// export const AppDataSource = new DataSource({
//   type: 'mssql',
//   host: process.env.DB_HOST || 'localhost',
//   port: parseInt(process.env.DB_PORT || '1433', 10), // Use '1433' as the default string
//   username: process.env.DB_USERNAME || 'sa',
//   password: process.env.DB_PASSWORD || '123',
//   database: process.env.DB_DATABASE || 'filter',
//   entities: [User],
//   synchronize: true,
//   extra: {
//     trustServerCertificate: process.env.TRUST_SERVER_CERTIFICATE === 'true', // Set this from your environment variables
//     encrypt: true,
//   },
// });
// import { DataSource } from 'typeorm';
// import { User } from '../entities/User';
// import * as dotenv from 'dotenv';

// dotenv.config();

// export const AppDataSource = new DataSource({
//   type: 'mssql',
//   host: process.env.DB_HOST || 'localhost',
//   port: parseInt(process.env.DB_PORT || '1433', 10),
//   username: process.env.DB_USERNAME || 'sa',
//   password: process.env.DB_PASSWORD || '123',
//   database: process.env.DB_DATABASE || 'filter',
//   entities: [User],
//   synchronize: false, // Disable automatic synchronization
//   extra: {
//     trustServerCertificate: process.env.TRUST_SERVER_CERTIFICATE === 'true',
//     encrypt: true,
//   },
// });

import { DataSource } from 'typeorm';
import { User } from '../entities/User';
import * as dotenv from 'dotenv';
import { Role } from '../entities/Role';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'mssql',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '1433', 10),
  username: process.env.DB_USERNAME || 'sa',
  password: process.env.DB_PASSWORD || '123',
  database: process.env.DB_DATABASE || 'dash',
  entities: [User,Role],
  //migrations: ['src/migrations/*.ts'], // Specify your migrations folder here
  synchronize: true, // Disable automatic synchronization
  //migrationsRun: true, // Automatically run migrations on startup
  extra: {
    trustServerCertificate: process.env.TRUST_SERVER_CERTIFICATE === 'true',
    encrypt: true,
  },
});



