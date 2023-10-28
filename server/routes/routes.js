import questionRoutes from './questionRoutes.js';
import userRoutes from './userRoutes.js';
import quizRoutes from './quizRoutes.js';

const initRoutes = (app) => {
    app.use('/api/questions', questionRoutes);
    app.use('/api/users', userRoutes);
    app.use('/api/quizzes', quizRoutes);
};

export default initRoutes;