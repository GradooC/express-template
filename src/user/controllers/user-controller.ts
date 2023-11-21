import { Request, Response } from 'express';
import { prisma } from '../../db';

export async function getAllUsers(req: Request, res: Response) {
    const users = await prisma.user.findMany();
    res.json(users);
}

export async function createUser(req: Request, res: Response) {
    const result = await prisma.user.create({
        data: { ...req.body },
    });
    res.json(result);
}
