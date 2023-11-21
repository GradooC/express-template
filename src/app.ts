import express from 'express';
import { userRouter } from './user';
import { postRouter } from './post';
import { loggerMiddleware } from './common/middlewares/logger-middleware';
import passport from 'passport';
import {
    authMiddleware,
    jwtStrategy,
} from './common/middlewares/auth-middleware';

const app = express();

app.use(express.json());
app.use(loggerMiddleware);
passport.use(jwtStrategy);

app.use('/user', userRouter);

app.use('/post', authMiddleware, postRouter);

app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000'),
);
