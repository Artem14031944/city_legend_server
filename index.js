import 'dotenv/config';
import errorHandler from './middleware/ErrorHandingMiddleware.js';
import { Stock } from './models/models.js';
import router from './routes/index.js';
import sequelise from './db/db.js';
import express from 'express';
import cors from 'cors';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors({
    credentials: true,
    origin: [process.env.CLIENT_URL]
}));

app.use(express.json());
app.use('/api', router);
app.use(errorHandler);

const startApp = async () => {
    try{
        await sequelise.authenticate();
        await sequelise.sync();
        app.listen(PORT, () => console.log(`Stared server in a ${PORT} port`));
    } catch(err) {
        console.log(err);
    }
};

startApp();