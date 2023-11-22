import Ajv, { JSONSchemaType } from 'ajv';
import { NextFunction, Request, Response } from 'express';

const ajv = new Ajv({
    allErrors: true,
});

type Schemas = {
    body?: JSONSchemaType<Record<string, unknown>>;
    query?: JSONSchemaType<Record<string, unknown>>;
    params?: JSONSchemaType<Record<string, unknown>>;
};

export function validate(schemas: Schemas) {
    return (req: Request, res: Response, next: NextFunction) => {
        const { params, body } = schemas;

        if (params) {
            const validate = ajv.compile(params);
            const isValid = validate(req.params);

            if (!isValid) {
                return res.status(400).send({
                    status: false,
                    error: {
                        message: `Invalid Params: ${ajv.errorsText(
                            validate.errors,
                        )}`,
                    },
                });
            }
        }

        if (body) {
            const validate = ajv.compile(body);
            const isValid = validate(req.body);

            if (!isValid) {
                return res.status(400).send({
                    status: false,
                    error: {
                        message: `Invalid Body: ${ajv.errorsText(
                            validate.errors,
                        )}`,
                    },
                });
            }
        }

        next();
    };
}
