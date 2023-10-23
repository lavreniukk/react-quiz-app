const addNewQuestionValid = (req, res, next) => {
    try {
        if (!text || !answers || !correctAnswer) { 
            throw new Error('All of the fields are required!'); 
        }
        validateQuestion(req.body);
        next();
    } catch (error) {
        res.status(400).json({
            error: true,
            message: error.message
        })
    }
}

const updateQuestionValid = (req, res, next) => {
    try {
        validateQuestion(req.body);
        next();
    } catch (error) {
        res.status(400).json({
            error: true, 
            message: error.message
        })
    }
}

const validateAnswers = (answers) => {
    if (answers.length < 2 || answers.length > 5) {
        return false;
    }
    return true;
}

const validateCorrectAnswer = (correctAnswer, answers) => {
    if (correctAnswer >= answers.length || correctAnswer < 0) {
        return false;
    }
    return true;
}

const validateQuestion = (question) => {
    const { answers, correctAnswer } = question;

    if (answers && !validateAnswers(answers)) { 
        throw new Error('Question should have more than 2 and less than 5 answers'); 
    }

    if (correctAnswer && !validateCorrectAnswer(correctAnswer, answers)) {
        throw new Error("Wrong correct answer index");
    }
}

export { addNewQuestionValid, updateQuestionValid };