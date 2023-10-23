import { Router } from 'express';
import { getQuestions, getQuestion, addQuestion, deleteQuestion, updateQuestion } from '../controllers/questionController.js';
import responseMiddleware from '../middlewares/response.middleware.js';
import { addNewQuestionValid, updateQuestionValid } from '../middlewares/questions.validation.middleware.js';
const router = Router();

router.get('/', getQuestions, responseMiddleware);

router.post('/', addNewQuestionValid,addQuestion, responseMiddleware);

router.put('/:id', updateQuestionValid, updateQuestion, responseMiddleware);

router.delete('/:id', deleteQuestion, responseMiddleware);

router.get('/:id', getQuestion, responseMiddleware);

export default router;
