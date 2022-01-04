import { Request, Response } from 'express';

export const user = (req: Request, res: Response) => {
  req
  res.send('User');
}