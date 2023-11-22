import { object, string } from 'zod';

export const addPostBodySchema = object({
    body: object({
        title: string(),
        authorEmail: string().email(),
        content: string().optional(),
    }),
});
