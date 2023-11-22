import { Request, Response } from 'express';

import { prisma } from '../../db';

export async function getAllPublishedPosts(req: Request, res: Response) {
    const posts = await prisma.post.findMany({
        where: { published: true },
        include: { author: true },
    });
    res.json(posts);
}

export async function getPost(req: Request, res: Response) {
    const { id } = req.params;
    const post = await prisma.post.findUnique({
        where: { id: Number(id) },
    });
    res.json(post);
}

export async function addPost(req: Request, res: Response) {
    const { title, content, authorEmail } = req.body;
    const result = await prisma.post.create({
        data: {
            title,
            content,
            published: false,
            author: { connect: { email: authorEmail } },
        },
    });
    res.json(result);
}

export async function publishPost(req: Request, res: Response) {
    const { id } = req.params;
    const post = await prisma.post.update({
        where: { id: Number(id) },
        data: { published: true },
    });
    res.json(post);
}

export async function deletePost(req: Request, res: Response) {
    const { id } = req.params;
    const post = await prisma.post.delete({
        where: { id: Number(id) },
    });
    res.json(post);
}
