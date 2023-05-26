import { Request, Response } from 'express';
import logger from '../logger';
import { getUserDataByIdManager, getUserDataByUserNameManager } from '../manager/user.manager';
import { CodesResponses } from '../resources/enums/codesResponses.enum';

/** Function that controls the body that receives checking that data arrives
 *
 * @param {Request} request object of the request
 * @param {Response} response object of the response
 * @returns {Promise<Response>} response with the result of the operation
 */
export async function getUserDataById(request: Request, response: Response): Promise<Response> {
  try {
    // Check that the query arrives
    if (!request.query) throw new Error('There is no data in the query');
    const { access, id } = request.query;
    if (!access) throw new Error('Error user access');
    if (!id) throw new Error('Error id');

    const userResult = await getUserDataByIdManager(<string>access, <string>id);

    // if all goes well return 200
    return response.status(CodesResponses.OK).json({ success: true, message: 'OK', user: userResult });
  } catch (error) {
    logger.error(error.message);
    // if there is an error return a 400
    return response.status(CodesResponses.BAD_REQUEST).json({
      success: false,
      message: error.message
    });
  }
}

/** Function that controls the body that receives checking that data arrives
 *
 * @param {Request} request object of the request
 * @param {Response} response object of the response
 * @returns {Promise<Response>} response with the result of the operation
 */
export async function getUserDataByUserName(request: Request, response: Response): Promise<Response> {
  try {
    // Check that the query arrives
    if (!request.query) throw new Error('There is no data in the query');
    const { access, userName } = request.query;
    if (!access) throw new Error('Error user access');
    if (!userName) throw new Error('Error user name');

    const userResult = await getUserDataByUserNameManager(<string>access, <string>userName);

    // if all goes well return 200
    return response.status(CodesResponses.OK).json({ success: true, message: 'OK', user: userResult });
  } catch (error) {
    logger.error(error.message);
    // if there is an error return a 400
    return response.status(CodesResponses.BAD_REQUEST).json({
      success: false,
      message: error.message
    });
  }
}
