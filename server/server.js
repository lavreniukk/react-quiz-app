import express from 'express';
import dotenv from 'dotenv/config';
import initRoutes from './routes/routes.js';
const port = process.env.PORT

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true })) //maybe false
initRoutes(app);

app.listen(port, () => {
    console.log(`started server ${port}`)
});