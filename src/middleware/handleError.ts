import { Request, Response } from 'express';
import { CodesResponses } from '../resources/enums/codesResponses.enum';

/**
 * Function that handles the not found error
 * @param {Error} error - error object
 * @param {Request} _req - request object from express
 * @param {Response} res - response object from express
 * @returns {Response}
 */
export const handleError = (error: Error, _req: Request, res: Response): Response => {
  return res.status(res.statusCode || CodesResponses.INTERNAL_SERVER_ERROR).json({ error: { message: error.message } });
};
