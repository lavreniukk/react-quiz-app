import questionRepository from "../repositories/questionsRepository.js";

class QuestionService {
    async getAllQuestions() {
        const questions = await questionRepository.getAll();
        if (!questions) {
            return null;
        }
        return questions;
    }
    async getQuestionById(questionId) {
        const question = await questionRepository.getById(questionId);
        if (!question) {
            return null;
        }
        return question;
    }
    async addNewQuestion(questionData) {
        return await questionRepository.create(questionData);
    }
    async updateQuestion(newQuestionData, questionId) {
        return await questionRepository.update(newQuestionData, questionId);
    }
    async deleteQuestion(questionId) {
        return await questionRepository.delete(questionId);
    }
}

const questionService = new QuestionService();

export default questionService;