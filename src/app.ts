// import validator from 'validator';
import express from 'express';
import path from 'path';
const app = express();

//config folder public
app.use(express.static(path.join(__dirname, '../public')));





export default app;