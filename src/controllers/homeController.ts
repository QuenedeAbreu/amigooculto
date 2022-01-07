import { Request, Response } from 'express';
import { User } from '../models/User';


export const home = async (req: Request, res: Response) => {
  // const user = await User.create({
  //   name: 'John Doe',
  //   age: 30,
  //   email: 'quenede2.in@gmail.com',
  // });

  const users = await User.findAll();
  req
  res.render('pages/home', {
    users
  });
}