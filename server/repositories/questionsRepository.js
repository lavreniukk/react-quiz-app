import BaseRepository from "./baseRepository";
import Question from "../models/questions";

class QuestionRepository extends BaseRepository {
    constructor() {
        super(Question);
    }
}

const questionRepository = new QuestionRepository();
export default questionRepository;