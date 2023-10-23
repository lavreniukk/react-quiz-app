import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
        text: {
            type: String,
            required: [true, 'A question must contain its text']
        },
        correctAnswer: {
            type: Number,
            required: [true, 'Please choose a correct answer to your question']
        },
        answers: {
            type: [
                {
                    type: String,
                    required: true,
                },
            ]
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User'
        }
    }, 
    {
        timestamps: true
    }
)
const Question = mongoose.model('Question', questionSchema)
export default Question;