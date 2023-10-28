import BaseRepository from "./baseRepository.js";
import Quiz from "../models/quiz.js";

class QuizRepository extends BaseRepository {
    constructor() {
        super(Quiz);
    }

    async getQuizzesByUserId(userId) {
        return await this.collection.find({ user: userId });
    }
}

const quizRepository = new QuizRepository();
export default quizRepository;