import BaseRepository from "./baseRepository.js";
import Question from "../models/questions.js";

class QuestionRepository extends BaseRepository {
    constructor() {
        super(Question);
    }
    
    async getRandomQuestionsIds(count) {
        const randomQuestions = await this.collection.aggregate([
            { $sample: { size: count } }
        ]);

        const randomQuestionsIds = randomQuestions.map(question => question._id);

        return randomQuestionsIds;
    }

    async getQuestionsByIds(questionIds) {
        return await this.collection.find({ _id: { $in: questionIds } });
    }
}

const questionRepository = new QuestionRepository();
export default questionRepository;