import { object, string } from 'zod';

export const signUpBodySchema = object({
    body: object({
        email: string().email(),
        password: string().min(6),
        name: string().optional(),
    }),
});
