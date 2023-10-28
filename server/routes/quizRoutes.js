import { Router } from 'express';
import { 
    getQuizById, 
    getQuizzesByCreator, 
    getQuizzesByParticipant, 
    sendUserAnswers, 
    startRandomQuiz } from '../controllers/quizController';
import { protectMiddleware } from '../middlewares/auth.middleware';
import responseMiddleware from '../middlewares/response.middleware';

const router = Router();

router.get('/id/:id', getQuizById, responseMiddleware);
router.get('/createdby', protectMiddleware, getQuizzesByCreator, responseMiddleware);
router.get('/part', protectMiddleware, getQuizzesByParticipant, responseMiddleware);
router.get('/random', protectMiddleware, startRandomQuiz, responseMiddleware);
router.put('/complete/:id', protectMiddleware, sendUserAnswers, responseMiddleware);

export default router;