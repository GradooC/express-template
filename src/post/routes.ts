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

router.get('/:id', validate({ params: idParamSchema }), getPost);

router.post('/', validate({ body: addPostBodySchema }), addPost);

router.put('/publish/:id', validate({ params: idParamSchema }), publishPost);

router.delete('/:id', validate({ params: idParamSchema }), deletePost);

export const postRouter = router;
