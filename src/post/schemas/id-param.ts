import { JSONSchemaType } from 'ajv';

type IdParam = {
    id: string;
};

export const idParamSchema: JSONSchemaType<IdParam> = {
    type: 'object',
    properties: {
        id: {
            type: 'string',
            pattern: '\\d+',
        },
    },
    required: ['id'],
    additionalProperties: false,
};
