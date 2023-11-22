import { Router } from 'express';

import { validate } from '../common/middlewares/validation-middleware';

import { signIn, signUp } from './controllers/user-controller';
import { signInBodySchema } from './schemas/sign-in-body';
import { signUpBodySchema } from './schemas/sign-up-body';

const router = Router();

router.post(`/sign-up`, validate({ body: signUpBodySchema }), signUp);

router.post('/sign-in', validate({ body: signInBodySchema }), signIn);

export const userRouter = router;
