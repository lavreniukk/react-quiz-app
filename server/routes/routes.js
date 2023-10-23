import questionRoutes from './questionRoutes.js';

const initRoutes = (app) => {
    app.use('/api/questions', questionRoutes);
    app.use('/api/users', userRoutes);
};

export default initRoutes;