import { Router } from 'express';
import { getQuestions, getQuestion, addQuestion, deleteQuestion, updateQuestion } from '../controllers/questionController.js';
import responseMiddleware from '../middlewares/response.middleware.js';
const router = Router();

router.get('/', getQuestions, responseMiddleware);

router.post('/', addQuestion);

router.put('/:id', updateQuestion);

router.delete('/:id', deleteQuestion);

router.get('/:id', getQuestion);

export default router;
