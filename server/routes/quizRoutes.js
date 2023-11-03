import { Router } from 'express';
import { 
    getQuizById, 
    getQuizzesByCreator, 
    getQuizzesByParticipant, 
    sendUserAnswers, 
    startRandomQuiz } from '../controllers/quizController.js';
import { protectMiddleware } from '../middlewares/auth.middleware.js';
import responseMiddleware from '../middlewares/response.middleware.js';

const router = Router();

router.get('/id/:id', getQuizById, responseMiddleware);
router.get('/createdby', protectMiddleware, getQuizzesByCreator, responseMiddleware);
router.get('/part', protectMiddleware, getQuizzesByParticipant, responseMiddleware);
router.get('/random', protectMiddleware, startRandomQuiz, responseMiddleware);
router.put('/complete/:id', protectMiddleware, sendUserAnswers, responseMiddleware);

export default router;