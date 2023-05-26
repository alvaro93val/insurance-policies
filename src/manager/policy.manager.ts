import { User } from '../resources/dto/user.dto';
import { UserPolicies } from '../resources/dto/userPolicies.dto';
import { Role } from '../resources/enums/role.enum';
import { getPolicies } from '../services/policy.service';
import { getUsers } from '../services/user.service';

/**
 * Function that return the user found with a policies list by user name
 * @param {string} userAccess user access for authentication and authorization
 * @param {string} userName user name to find
 * @returns {Promise<UserPolicies>} user with policies list
 */
export async function getPolicyListByUserNameManager(userAccess: string, userName: string): Promise<UserPolicies> {
  const users = await getUsers();

  // check role of the user access
  const user = users.find((u) => u.name === userAccess);
  if (!user) throw new Error('User not found by user');
  if (user.role !== Role.Admin) throw new Error('User does not have permission');

  // find the user by user name
  const userFind = users.find((u) => u.name === userName);
  if (!userFind) throw new Error('User not found by user name');
  const policies = await getPolicies();

  // find the policies list by user id
  const policyList = policies.filter((p) => (p.clientId = userFind.id));
  if (!policyList.length) throw new Error('Policies not found by user');

  const userPolicies: UserPolicies = {
    user: userFind,
    policies: policyList
  };

  return userPolicies;
}

/**
 * Function that return the user found by policy id
 * @param {string} userAccess user access for authentication and authorization
 * @param {string} policyId policy id
 * @returns {Promise<User>} return the user found
 */
export async function getUserByPolicyIdManager(userAccess: string, policyId: string): Promise<User> {
  const users = await getUsers();

  // check role of the user access
  const user = users.find((u) => u.name === userAccess);
  if (!user) throw new Error('User not found by user');
  if (user.role !== Role.Admin) throw new Error('User does not have permission');

  // find the policy by policy id
  const policies = await getPolicies();
  const policy = policies.find((p) => (p.id = policyId));
  if (!policy) throw new Error('Policy not found by user');

  // find user by policy
  const userFind = users.find((u) => u.id === policy.clientId);
  if (!userFind) throw new Error('User not found by user');

  return userFind;
}
