import { Request, Response } from 'express';
import { User } from '../models/User';

export const home = (req: Request, res: Response) => {
  let listUsers = User.getUsers();
  let unicUser = User.getUserById(3);
  req
  res.render('pages/home', {
    users: listUsers,
    unicUser
  });
}