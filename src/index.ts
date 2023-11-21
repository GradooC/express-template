import express from 'express';
import { userRouter } from './user';
import { postRouter } from './post';
import { loggerMiddleware } from './common/middlewares/logger-middleware';

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use('/user', userRouter);

app.use('/post', postRouter);

app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
);
