import BaseRepository from "./baseRepository.js";
import Question from "../models/questions.js";

class QuestionRepository extends BaseRepository {
    constructor() {
        super(Question);
    }
}

const questionRepository = new QuestionRepository();
export default questionRepository;