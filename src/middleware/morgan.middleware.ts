import { getTimezoneOffset } from 'date-fns-tz';
import { Request, Response } from 'express';

/**
 * Function that returns a string with the number of milliseconds with 3 digits
 * @param {number} number number of milliseconds
 * @returns {string} string with the number of milliseconds with 3 digits
 */
const milliToString = (number: number): string => {
  if (number < 10) return `00${number}`;
  else if (number < 100) return `0${number}`;
  else return `${number}`;
};

/**
 * Function that converts a date number (month, day, hour, minute or second)
 * to string adding a 0 if necessary
 * @param {number} number number to convert
 * @returns {string} number converted
 */
const numberToString = (number: number): string => {
  return number < 10 ? `0${number}` : `${number}`;
};

/**
 * Functions that returns the date of the request in color gray
 * @returns {string} date in format yyyy-mm-dd hh:mm:ss.mmm in color gray
 */
export const dateRequest = (): string => {
  // get the local time difference of Spain (+1 hours in winter, +2 in summer) and we convert it into hours
  const date = new Date(getTimezoneOffset('Europe/Madrid') + new Date().getTime());
  const y = numberToString(date.getFullYear());
  const m = numberToString(date.getMonth() + 1);
  const d = numberToString(date.getDate());
  const h = numberToString(date.getHours());
  const min = numberToString(date.getMinutes());
  const s = numberToString(date.getSeconds());
  const mil = milliToString(date.getMilliseconds());
  return '\x1b[90m' + y + '-' + m + '-' + d + ' ' + h + ':' + min + ':' + s + '.' + mil + '\x1b[0m';
};

/**
 * Functions that returns the status code of the response in color green, blue, red or yellow
 * depending on the status code
 * @param {Request} _req request object (not used)
 * @param {Response} res response object
 * @returns {string} status code in color
 */
export const statusCode = (_req: Request, res: Response): string => {
  if (res.statusCode >= 100 && res.statusCode < 200) return '\x1b[90m' + res.statusCode + '\x1b[0m';
  else if (res.statusCode >= 200 && res.statusCode < 300) return '\x1b[32m' + res.statusCode + '\x1b[0m';
  else if (res.statusCode >= 300 && res.statusCode < 400) return '\x1b[36m' + res.statusCode + '\x1b[0m';
  else if (res.statusCode >= 400 && res.statusCode < 500) return '\x1b[31m' + res.statusCode + '\x1b[0m';
  else if (res.statusCode >= 500) return '\x1b[33m' + res.statusCode + '\x1b[0m';
  else return '\x1b[90m' + res.statusCode + '\x1b[0m';
};

/**
 * Functions that returns the method type of the request in color green, blue, red or yellow
 * @param {Request} req request object
 * @returns {string} method type in color
 */
export const methodType = (req: Request): string => {
  if (req.method === 'GET') return '\x1b[36m' + req.method + '\x1b[0m';
  else if (req.method === 'POST') return '\x1b[32m' + req.method + '\x1b[0m';
  else if (req.method === 'PUT') return '\x1b[33m' + req.method + '\x1b[0m';
  else if (req.method === 'DELETE') return '\x1b[31m' + req.method + '\x1b[0m';
  else return '\x1b[90m' + req.method + '\x1b[0m';
};

/**
 * Enum with the constants used in the morgan middleware
 * @enum {string}
 * @member LOGGER
 * @member ALARM_TYPE
 * @member DATE_REQUEST
 * @member STATUS_CODE
 * @member METHOD_TYPE
 */
export const enum Morgan {
  LOGGER = ':dateRequest :methodType :url :statusCode :response-time ms - :res[content-length]',
  DATE_REQUEST = 'dateRequest',
  METHOD_TYPE = 'methodType',
  STATUS_CODE = 'statusCode'
}
