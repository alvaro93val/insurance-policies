import { Request, Response } from 'express';
import { CodesResponses } from '../resources/enums/codesResponses.enum';

/**
 * Function that return the version of the API
 * @param {Request} _req Request object from express
 * @param {Response} res Response object from express
 * @returns {Response}
 */
export const getVersion = (_req: Request, res: Response): Response => {
  const name = process.env.npm_package_name?.toLocaleUpperCase();
  const version = process.env.npm_package_version;
  return res.status(CodesResponses.OK).json({ success: true, name: name, version: version });
};
