import BaseRepository from "./baseRepository.js";
import Quiz from "../models/quiz.js";

class QuizRepository extends BaseRepository {
    constructor() {
        super(Quiz);
    }

    async getQuizzesByCreatorId(userId) {
        return await this.collection.find({ createdBy: userId });
    }

    async getQuizzesByParticipantId(participantId) {
        return await this.collection.find({ 'participants.user': participantId }, { 'participants.$': 1 });
    }
}

const quizRepository = new QuizRepository();
export default quizRepository;