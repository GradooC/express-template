import { Router } from 'express';

import { validate } from '../common/middlewares/validation-middleware';

import {
    addPost,
    deletePost,
    getAllPublishedPosts,
    getPost,
    publishPost,
} from './controllers/post-controller';
import { addPostBodySchema } from './schemas/add-post-body';
import { idParamSchema } from './schemas/id-param';

const router = Router();

router.get('/feed', getAllPublishedPosts);

router.get('/:id', validate(idParamSchema), getPost);

router.post('/', validate(addPostBodySchema), addPost);

router.put('/publish/:id', validate(idParamSchema), publishPost);

router.delete('/:id', validate(idParamSchema), deletePost);

export const postRouter = router;
