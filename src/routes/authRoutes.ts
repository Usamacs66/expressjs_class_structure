import { Router } from 'express';
import { UserController } from '../controllers/UserController';
import { authenticateToken } from '../middleware/authMiddleware';

const router = Router();
const userController = new UserController();

router.get('/', authenticateToken, userController.getUsers.bind(userController));
router.post('/', userController.createUser.bind(userController));

export default router;
