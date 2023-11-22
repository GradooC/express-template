import { Post, User } from '@prisma/client';
import { JSONSchemaType } from 'ajv';

type AddPostBody = {
    title: Post['title'];
    content: Post['content'];
    authorEmail: User['email'];
};

export const addPostBodySchema: JSONSchemaType<AddPostBody> = {
    type: 'object',
    properties: {
        title: {
            type: 'string',
        },
        content: {
            type: 'string',
        },
        authorEmail: {
            type: 'string',
        },
    },
    required: ['title', 'authorEmail'],
    additionalProperties: false,
};
