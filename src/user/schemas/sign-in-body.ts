import { User } from '@prisma/client';
import { JSONSchemaType } from 'ajv';

type SignInBody = {
    email: User['email'];
    password: User['password'];
};

export const signInBodySchema: JSONSchemaType<SignInBody> = {
    type: 'object',
    properties: {
        email: { type: 'string' },
        password: { type: 'string', minLength: 6 },
    },
    required: ['email', 'password'],
    additionalProperties: false,
};
