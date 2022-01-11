import { Router } from 'express';

import * as  UserController from '../controllers/userController';

const user = Router();
user.get('/', UserController.user)
user.get('/edit/:id', UserController.editUser)

// Rotas Post
user.post('/novousuario', UserController.createUser);

user.post('/editusuario/:id', UserController.updateUser);

user.get('/delete/:id', UserController.deleteUser);

export default user;