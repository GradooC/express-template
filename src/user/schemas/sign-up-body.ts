import { User } from '@prisma/client';
import { JSONSchemaType } from 'ajv';

type SignUpBody = {
    email: User['email'];
    password: User['password'];
    name: User['name'];
};

export const signUpBodySchema: JSONSchemaType<SignUpBody> = {
    type: 'object',
    properties: {
        email: { type: 'string' },
        password: { type: 'string', minLength: 6 },
        name: { type: 'string' },
    },
    required: ['email', 'password'],
    additionalProperties: false,
};
