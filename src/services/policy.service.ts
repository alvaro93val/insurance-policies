import axios from 'axios';
import { Policy, PolicyList } from '../resources/dto/policy.dto';

/**
 * Service that obtains the insurance policies
 * @returns {Promise<Policy[]>}
 */
export async function getPolicies(): Promise<Policy[]> {
  const policies: Policy[] = [];
  const options = { method: 'GET', url: 'http://www.mocky.io/v2/580891a4100000e8242b75c5' };

  await axios
    .request(options)
    .then(function (response) {
      const data: PolicyList = response.data;
      policies.push(...data.policies);
    })
    .catch(function (error) {
      throw error;
    });

  return policies;
}
