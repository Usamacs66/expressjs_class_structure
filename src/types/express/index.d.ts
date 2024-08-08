import { User } from '../entities/User';
import { Role } from '../entities/Role';

declare global {
  namespace Express {
    interface Request {
      user?: User;
      roles?: Role[];
    }
  }
}
// import express from "express";

// declare global {
//   namespace Express {
//     interface Request {
//       user?: Record<string,any>
//     }
//   }
// }