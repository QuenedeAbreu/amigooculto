import { Router } from 'express';
const home = Router();
import * as HomeController from '../controllers/homeController';


home.get('/', HomeController.home)


export default home;