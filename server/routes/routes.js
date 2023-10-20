import questionRoutes from './questionRoutes.js';

const initRoutes = (app) => {
    app.use('/api/questions', questionRoutes);
};

export default initRoutes;