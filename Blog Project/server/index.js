import express from 'express'
import connection from './db/connection.js';
import router from './routes/route.js';
import cors from 'cors'
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app=express();

app.listen(8000,()=>{console.log('Port 8000 running')});

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));

app.use(cors());

dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

connection(username,password);


app.use('/',router);
