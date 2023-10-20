import { Router } from 'express';
import { getQuestions, getQuestion, addQuestion, deleteQuestion, updateQuestion } from '../controllers/questionController.js';
const router = Router();

router.get('/', getQuestions);

router.post('/', addQuestion);

router.put('/:id', updateQuestion);

router.delete('/:id', deleteQuestion);

router.get('/:id', getQuestion);

export default router;
