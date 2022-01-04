// import validator from 'validator';
import express from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

//Configurando Template Engine
app.set('view engine', 'mst');
app.set('views', path.join(__dirname, 'views'));
app.engine('mst', mustache(__dirname + '/views/partials', '.mst'));

//habilitando o uso de dados via POST
app.use(express.urlencoded({ extended: true }));

//config folder public
app.use(express.static(path.join(__dirname, '../public')));





export default app;