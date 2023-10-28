import mongoose from "mongoose";
import Question from "./questions";

const quizSchema = mongoose.Schema({
        title: {
            type: String,
        },
        category: {
            type: String,
        },
        quizQuestions: [{
            type: Question,
            required: true,
            ref: 'Question'
        }],
        user: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: 'User'
        },
        userTime: {
            type: Number,
            default: undefined
        },
        userScore: {
            type: Number,
            default: undefined
        }
    },
    {
        timestamps: true,
    }
);

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;