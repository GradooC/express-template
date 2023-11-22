import { coerce, object } from 'zod';

export const idParamSchema = object({
    params: object({
        id: coerce.number().min(0),
    }),
});
