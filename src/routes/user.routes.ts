import { Router } from 'express';
import { getUserDataById, getUserDataByUserName } from '../controllers/user.controller';

const userRoute = Router();

userRoute.route('/data').get(getUserDataById);
userRoute.route('/data/name').get(getUserDataByUserName);

export default userRoute;
