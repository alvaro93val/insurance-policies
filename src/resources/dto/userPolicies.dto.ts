import { Policy } from './policy.dto';
import { User } from './user.dto';

/**
 * User data with Policies List
 * @alias UserPolicies
 * @typedef UserPolicies
 */
export interface UserPolicies {
  user: User;
  policies: Policy[];
}
