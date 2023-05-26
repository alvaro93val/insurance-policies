import axios from 'axios';
import { User, UserList } from '../resources/dto/user.dto';

/**
 * Service that obtains the users
 * @returns {Promise<User[]>}
 */
export async function getUsers(): Promise<User[]> {
  const users: User[] = [];
  const options = { method: 'GET', url: 'http://www.mocky.io/v2/5808862710000087232b75ac' };

  await axios
    .request(options)
    .then(function (response) {
      const data: UserList = response.data;
      users.push(...data.clients);
    })
    .catch(function (error) {
      throw error;
    });

  return users;
}
