import { object, string } from 'zod';

export const signInBodySchema = object({
    body: object({
        email: string().email(),
        password: string().min(6),
    }),
});
