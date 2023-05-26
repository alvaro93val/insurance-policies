import { User } from '../resources/dto/user.dto';
import { Role } from '../resources/enums/role.enum';
import { getUsers } from '../services/user.service';

/**
 * Function that return the user data by user id
 * @param {string} userAccess user access for authentication and authorization
 * @param {string} userid user id
 * @returns {Promise<UserPolicies>} user data
 */
export async function getUserDataByIdManager(userAccess: string, userid: string): Promise<User> {
  const users = await getUsers();

  // check role of the user access
  const user = users.find((u) => u.name === userAccess);

  if (!user) throw new Error('User not found by user');
  if (user.role !== Role.Admin && user.role !== Role.User) throw new Error('User does not have permission');

  // find user by id
  const userFind = users.find((u) => u.id === userid);
  if (!userFind) throw new Error('User not found by id');

  return userFind;
}

/**
 * Function that return the user data by user name
 * @param {string} userAccess user access for authentication and authorization
 * @param {string} userName user name to find
 * @returns {Promise<UserPolicies>} user data
 */
export async function getUserDataByUserNameManager(userAccess: string, userName: string): Promise<User> {
  const users = await getUsers();

  // check role of the user access
  const user = users.find((u) => u.name === userAccess);
  if (!user) throw new Error('User not found by user');
  if (user.role !== Role.Admin && user.role !== Role.User) throw new Error('User does not have permission');

  // find user by user name
  const userFind = users.find((u) => u.name === userName);
  if (!userFind) throw new Error('User not found by user name');

  return userFind;
}
