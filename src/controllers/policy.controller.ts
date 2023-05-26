import { Request, Response } from 'express';
import logger from '../logger';
import { getPolicyListByUserNameManager, getUserByPolicyIdManager } from '../manager/policy.manager';
import { CodesResponses } from '../resources/enums/codesResponses.enum';

/** Function that controls the body that receives checking that data arrives
 *
 * @param {Request} request object of the request
 * @param {Response} response object of the response
 * @returns {Promise<Response>} response with the result of the operation
 */
export async function getPolicyListByUserName(request: Request, response: Response): Promise<Response> {
  try {
    // Check that the query arrives
    if (!request.query) throw new Error('There is no data in the query');
    const { access, userName } = request.query;
    if (!access) throw new Error('Error user access');
    if (!userName) throw new Error('Error userName');

    const userResult = await getPolicyListByUserNameManager(<string>access, <string>userName);

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
export async function getUserByPolicyId(request: Request, response: Response): Promise<Response> {
  try {
    // Check that the query arrives
    if (!request.query) throw new Error('There is no data in the query');
    const { access, policyNumber } = request.query;
    if (!access) throw new Error('Error user access');
    if (!policyNumber) throw new Error('Error user name');

    const userResult = await getUserByPolicyIdManager(<string>access, <string>policyNumber);

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
