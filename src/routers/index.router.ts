import { Router, Request, Response } from "express";
const router = Router();

import home from './home.routes';
import user from './user.routes';

//routers index All
router.use("/", home);
router.use("/user", user);


// Router page not found
router.use((req: Request, res: Response) => {
  req
  res.status(404).send('404');
})





export default router;