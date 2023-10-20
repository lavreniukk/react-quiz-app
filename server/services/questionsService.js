import questionRepository from "../repositories/questionsRepository";

class QuestionService {
    async getAllQuestions() {
        try {
            return await questionRepository.getAll();
        } catch (error) {
            throw error
        }
    }
    async getQuestionById(questionId) {
        try {
            return await questionRepository.getById(questionId);
        } catch (error) {
            throw error
        }
    }
    async addNewQuestion(questionData) {
        try {
            return await questionRepository.create(questionData);
        } catch (error) {
            throw error
        }
    }
    async updateQuestion(newQuestionData, questionId) {
        try {
            return await questionRepository.update(newQuestionData, questionId);
        } catch (error) {
            throw error
        } 
    }
    async deleteQuestion(questionId) {
        try {
            return await questionRepository.delete(questionId);
        } catch (error) {
            throw error
        }
    }
}