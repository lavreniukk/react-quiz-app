import questionService from '../services/questionsService.js';
import Question from '../models/questions.js';

const getQuestions = async (req, res, next) => {
    try {
        const questions = await questionService.getAllQuestions();

        if (!questions) {
            throw new Error('No questions were found');
        }

        res.status(200);
        res.message = 'Questions were found';
        res.data = questions;
    } catch (error) {
        res.status(404);
        res.message = error.message;
    } finally {
        next();
    }
}

const getQuestion = async (req, res, next) => {
    res.status(200).json({ message: `Get question with id ${req.params.id}`})
}

const addQuestion = async (req, res, next) => {
    try {
        const addedQuestion = await questionService.addNewQuestion(req.body);
        res.status(200);
        res.message = 'Question added successfully';
        res.data = addedQuestion;
    } catch (error) {
        res.status(400);
        res.message = error.message;
    } finally {
        next();
    }
}

const updateQuestion = async (req, res, next) => {
    res.status(200).json({ message: `Update question with id ${req.params.id}`})
}

const deleteQuestion = async (req, res, next) => {
    res.status(200).json({ message: `Delete question with id ${req.params.id}`})
}

export {
    getQuestions,
    getQuestion,
    updateQuestion,
    deleteQuestion,
    addQuestion  
}