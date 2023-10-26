import { Router } from 'express';
import { getQuestions, getQuestion, addQuestion, deleteQuestion, updateQuestion } from '../controllers/questionController.js';
import responseMiddleware from '../middlewares/response.middleware.js';
import { addNewQuestionValid, updateQuestionValid } from '../middlewares/questions.validation.middleware.js';
import { protectMiddleware } from '../middlewares/auth.middleware.js';
const router = Router();

router.get('/', getQuestions, responseMiddleware);
router.get('/:id', getQuestion, responseMiddleware);
router.post('/', protectMiddleware, addNewQuestionValid, addQuestion, responseMiddleware);
router.put('/:id', protectMiddleware, updateQuestionValid, updateQuestion, responseMiddleware);
router.delete('/:id', protectMiddleware, deleteQuestion, responseMiddleware);

export default router;
