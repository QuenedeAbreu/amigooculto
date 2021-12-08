import { Router, Request, Response } from 'express';

const user = Router();
user.get('/', (req: Request, res: Response) => {
  req
  res.send('User');
})


export default user;