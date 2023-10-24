import {Router} from 'express';
import { getAllUsers, getCurrentUser, getUserById, login, register } from '../controllers/userController.js';
import responseMiddleware from '../middlewares/response.middleware.js';
import { loginUserValid, registerUserValid } from '../middlewares/users.validation.middleware.js';
import { protectMiddleware } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/', getAllUsers, responseMiddleware);
router.get('/id/:id', getUserById, responseMiddleware);
router.get('/current', protectMiddleware, getCurrentUser, responseMiddleware);
router.post('/login', loginUserValid, login, responseMiddleware);
router.post('/', registerUserValid, register, responseMiddleware);

export default router;