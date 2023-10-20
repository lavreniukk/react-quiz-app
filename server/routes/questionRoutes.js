import { Router } from 'express';
import { getQuestions, getQuestion, addQuestion, deleteQuestion, updateQuestion } from '../controllers/questionController.js';
import responseMiddleware from '../middlewares/response.middleware.js';
const router = Router();

router.get('/', getQuestions, responseMiddleware);

router.post('/', addQuestion, responseMiddleware);

router.put('/:id', updateQuestion, responseMiddleware);

router.delete('/:id', deleteQuestion, responseMiddleware);

router.get('/:id', getQuestion, responseMiddleware);

export default router;
