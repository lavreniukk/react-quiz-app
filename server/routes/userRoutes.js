import {Router} from 'express';
import { getAllUsers, getUserById, login, register } from '../controllers/userController.js';
import responseMiddleware from '../middlewares/response.middleware.js';

const router = Router();

router.get('/', getAllUsers, responseMiddleware);
router.get('/:id', getUserById, responseMiddleware);
router.post('/login', login, responseMiddleware);
router.post('/', register, responseMiddleware);

export default router;