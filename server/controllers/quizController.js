import quizService from "../services/quizService.js";

const getQuizById = async (req, res, next) => {
    try {
        const quiz = await quizService.getQuizById(req.params.id);

        if (!quiz) {
            throw new Error("Quiz wasn't found");
        }

        res.status(200);
        res.message = "Quiz found successfully";
        res.data = quiz;
    } catch (error) {
        res.status(404);
        res.message = error.message;
    } finally {
        next();
    }
}

const getQuizzesByCreator = async (req, res, next) => {
    try {
        const quizzes = await quizService.getQuizzesByCreatorId(req.user._id);

        if (!quizzes) {
            throw new Error("User's quizzes were not found");
        }

        res.status(200);
        res.message = 'Quizzes found successfully';
        res.data = quizzes;
    } catch (error) {
        res.status(404);
        res.message = error.message;
    } finally {
        next();
    }
}

const getQuizzesByParticipant = async (req, res, next) => {
    try {
        const quizzes = await quizService.getQuizzesByParticipantId(req.user._id);

        if (!quizzes) {
            throw new Error("User's quizzes were not found");
        }

        res.status(200);
        res.message = 'Quizzes found successfully';
        res.data = quizzes;
    } catch (error) {
        res.status(404);
        res.message = error.message;
    } finally {
        next();
    }
}

const startRandomQuiz = async (req, res, next) => {
    try {
        const quiz = await quizService.createRandomQuiz(req.body._id);

        if (!quiz) {
            throw new Error("Quiz wasn't started, something went wrong");
        }

        res.status(200);
        res.message = "Quiz was started";
        res.data = quiz;
    } catch (error) {
        res.status(500);
        res.message = error.message;
    } finally {
        next();
    }
}

const sendUserAnswers = async (req, res, next) => {
    try {
        const quizToComplete = await quizService.getQuizById(req.params.id);

        if (!quizToComplete) {
            throw new Error("Quiz wasn't found");
        }

        const completedQuiz = await quizService.checkUsersAnswers(req.params.id, req.body);

        if (!completedQuiz) {
            throw new Error("Quiz wasn't completed");
        }

        res.status(200);
        res.message = 'Quiz completed successfully';
        res.data = completedQuiz;
    } catch (error) {
        res.status(500);
        res.message = error.message;
    } finally {
        next();
    }
}

export {
    getQuizById,
    getQuizzesByCreator,
    getQuizzesByParticipant,
    startRandomQuiz,
    sendUserAnswers    
}