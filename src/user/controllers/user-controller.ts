import { Request, Response } from 'express';
import { prisma } from '../../db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function signUp(req: Request, res: Response) {
    try {
        const { email, password, name } = req.body;
        const passwordHash = await bcrypt.hash(password, 10);

        const user = await prisma.user.create({
            data: { email, name, password: passwordHash },
        });

        return res.status(201).json({
            message: 'User registered successfully',
            user: user,
        });
    } catch (error) {
        return res.status(500).json({ message: 'Error occured', error });
    }
}

export async function signIn(req: Request, res: Response) {
    try {
        const { email, password } = req.body;
        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            return res
                .status(400)
                .json({ message: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res
                .status(400)
                .json({ message: 'Invalid username or password' });
        }

        const userInfo = { email: user.email, id: user.id };

        const token = jwt.sign(
            { user: userInfo },
            process.env.JWT_SECRET || 'DEFAULT_JWT_SECRET',
            {
                expiresIn: '1h',
            },
        );

        return res.json({ message: 'Logged in successfully', token });
    } catch (error) {
        return res.status(500).json({ message: 'Error occured', error });
    }
}
