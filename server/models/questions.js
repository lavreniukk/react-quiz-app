import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
        text: {
            type: String,
            required: [true, 'A question must contain its text']
        },
        correstAnswer: {
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
        }
    }, 
    {
        timestamps: true
    }
)
const Question = mongoose.model('Question', questionSchema)
export default Question;