import { NextFunction, Request, Response } from 'express';
import { logger } from '../../logger';

export function loggerMiddleware(
    req: Request,
    res: Response,
    next: NextFunction,
) {
    logger(req, res);
    next();
}
