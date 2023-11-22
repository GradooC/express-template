import 'dotenv/config';

import express, { json } from 'express';
import passport from 'passport';

import {
    authMiddleware,
    jwtStrategy,
} from './common/middlewares/auth-middleware';
import { loggerMiddleware } from './common/middlewares/logger-middleware';
import { postRouter } from './post';
import { userRouter } from './user';

const app = express();

app.use(json());
app.use(loggerMiddleware);
passport.use(jwtStrategy);

app.use('/user', userRouter);

app.use('/post', authMiddleware, postRouter);

app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
);
