import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import homeRouter from './routes/home.js';
import uploadRouter from './routes/upload.js';
import 'dotenv/config';

const app = express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/', homeRouter);
app.use('/upload/file', uploadRouter);

const host = process.env.HOST || 'localhost';
const port = +process.env.PORT || 3000;

app.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
