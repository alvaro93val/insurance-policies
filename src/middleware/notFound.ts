import { NextFunction, Request, Response } from 'express';
import { CodesResponses } from '../resources/enums/codesResponses.enum';

/**
 * Function that handles the not found path
 * @param {Request} _req Request object from express
 * @param {Response} res Response object from express
 * @param {NextFunction} next Next function from express
 * @returns {void}
 */
export const notFound = (_req: Request, res: Response, next: NextFunction): void => {
  const error = new Error('Not found');
  res.status(CodesResponses.NOT_FOUND);
  next(error);
};
