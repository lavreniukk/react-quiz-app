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

    async getQuizzesByCreatorId(userId) {
        const quizzes = await quizRepository.getQuizzesByCreatorId(userId);
        if (!quizzes) {
            return null;
        }
        return quizzes;
    }

    async getQuizzesByParticipantId(participantId) {
        const quizzes = await quizRepository.getQuizzesByParticipantId(participantId);
        if (!quizzes) {
            return null;
        }
        return quizzes;
    }

    async createRandomQuiz(userId) {
        const randomQuestionsIds = await questionRepository.getRandomQuestionsIds(3);

        const newQuiz = {
            title: 'Random quiz',
            quizQuestions: randomQuestionsIds,
            createdBy: userId
        }

        return await quizRepository.create(newQuiz);
    }

    async checkUsersAnswers(quizId, userQuizInfo) {
        const { userId, userAnswers, userTime } = userQuizInfo;
        const usersQuiz = await quizRepository.getById(quizId);

        //maybe try catch block
        if (!usersQuiz) {
            throw new Error("Quiz wasn't found");
        }

        const questionsFromQuiz = await questionRepository.getQuestionsByIds(usersQuiz.quizQuestions);
        const userScore = this.calculateUserScore(questionsFromQuiz, userAnswers);

        const participant = {
            user: userId,
            userScore,
            userTime,
        }

        usersQuiz.participants.push(participant);
        await usersQuiz.save();

        usersQuiz.participants = usersQuiz.participants.filter(participant => participant.user.toString() === userId);
        return usersQuiz;
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

const quizService = new QuizService();
export default quizService;