import { Router } from 'express';
import { getPolicyListByUserName, getUserByPolicyId } from '../controllers/policy.controller';

const policyRoute = Router();

policyRoute.route('/list').get(getPolicyListByUserName);
policyRoute.route('/user').get(getUserByPolicyId);

export default policyRoute;
