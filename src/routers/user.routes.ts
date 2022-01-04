import { Router } from 'express';

import * as  UserController from '../controllers/userController';

const user = Router();
user.get('/', UserController.user)


export default user;