import { Router } from 'express';
import { createUser, getAllUsers } from './controllers/user-controller';

const router = Router();

router.get('/all', getAllUsers);

router.post(`/`, createUser);

export const userRouter = router;
