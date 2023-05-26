import { Role } from '../enums/role.enum';

/**
 * User List
 * @alias UserList
 * @typedef UserList
 */
export interface UserList {
  clients: User[];
}
/**
 * User data
 * @alias User
 * @typedef User
 */
export interface User {
  email: string;
  id: string;
  name: string;
  role: Role;
}
