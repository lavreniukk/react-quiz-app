import BaseRepository from "./baseRepository.js";
import Quiz from "../models/quiz.js";

class QuizRepository extends BaseRepository {
    constructor() {
        super(Quiz);
    }
}

const quizRepository = new QuizRepository();
export default quizRepository;