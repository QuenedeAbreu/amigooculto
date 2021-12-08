import { Router, Request, Response } from 'express';

const home = Router();
home.get('/', (req: Request, res: Response) => {
  req
  res.json({
    message: 'Welcome to the home page',
    name: 'Home',
    author: 'Quenede Abreu',
  });
})


export default home;