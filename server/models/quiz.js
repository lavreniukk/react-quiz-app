import mongoose from "mongoose";
import Question from "./questions.js";

const quizSchema = mongoose.Schema({
        title: {
            type: String,
        },
        category: {
            type: String,
        },
        quizQuestions: [{
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: 'Question'
        }],
        createdBy: {
            type: mongoose.Schema.ObjectId,
            required: true,
            ref: 'User'
        },
        participants: [
            {
                user: {
                    type: mongoose.Schema.ObjectId,
                    required: true,
                    ref: 'User'
                },
                userScore: {
                    type: Number,
                    required: true
                },
                userTime: {
                    type: Number,
                }
            }
        ]
    },
    {
        timestamps: true,
    }
);

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;