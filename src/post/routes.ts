import { Router } from 'express';
import {
    addPost,
    deletePost,
    getAllPublishedPosts,
    getPost,
    publishPost,
} from './controllers/post-controller';

const router = Router();

router.get('/feed', getAllPublishedPosts);

router.get('/:id', getPost);

router.post('/', addPost);

router.put('/publish/:id', publishPost);

router.delete('/:id', deletePost);

export const postRouter = router;
