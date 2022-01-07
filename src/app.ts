// import validator from 'validator';
import express, { Request, Response } from 'express';
import path from 'path';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import flash from 'express-flash';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

//habilitar cookie
app.use(cookieParser(process.env.SECRETKEY))

//habilitar a session
app.use(session({
  secret: process.env.SECRETKEY as string,
  resave: false,
  saveUninitialized: false
}));


//habilitar mensagens flash
app.use(flash())


//Configurando Template Engine
app.set('view engine', 'mst');
app.set('views', path.join(__dirname, 'views'));
app.engine('mst', mustache(__dirname + '/views/partials', '.mst'));

//habilitando o uso de dados via POST
app.use(express.urlencoded({ extended: true }));
//Acessar requisições POST no formato de JSON
app.use(express.json());

//config folder public
app.use(express.static(path.join(__dirname, '../public')));

app.use((req: Request, res: Response, next) => {
  res.locals.flashes = req.flash();
  next();
});




export default app;