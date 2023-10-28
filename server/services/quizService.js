import questionRepository from '../repositories/questionsRepository.js';
import quizRepository from '../repositories/quizRepository.js';

class QuizService {
    async getQuizById(id) {
        const quiz = await quizRepository.getById(id);
        if (!quiz) {
            return null;
        }
        return quiz;
    }

    async getQuizzesByUserId(userId) {
        const quizzes = await quizRepository.getQuizzesByUserId(userId);
        if (!quizzes) {
            return null;
        }
        return quizzes;
    }

    async createRandomQuiz(userId) {
        const randomQuestionsIds = await questionRepository.getRandomQuestionsIds(10);

        const newQuiz = {
            title: 'Random quiz',
            quizQuestions: randomQuestionsIds,
            user: userId
        }

        return await quizRepository.create(newQuiz);
    }

    async checkUsersAnswers(quizId, usersAnswers, userTime) {
        const usersQuiz = await quizRepository.getById(quizId);

        //maybe try catch block
        if (!quiz) {
            throw new Error("Quiz wasn't found");
        }

        const questionsFromQuiz = await questionRepository.getQuestionsByIds(usersQuiz.quizQuestions);
        const userScore = this.calculateUserScore(questionsFromQuiz, usersAnswers);

        const completedQuiz = {
            ...quiz,
            userTime,
            userScore,
        }

        return await quizRepository.update(completedQuiz, quizId);
    }

    calculateUserScore(questions, userAnswers) {
        let score = 0;

        userAnswers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                score++;
            }
        });

        return score;
    }
}