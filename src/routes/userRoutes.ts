import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();
const userController = new UserController();

router.get('/',authenticateToken, userController.getUsers);
router.post('/create',authenticateToken, userController.createUser);

export default router;
