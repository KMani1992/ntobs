const express=require('express');
const bodyParser=require('body-parser');
const logger=require('morgan');
const api=express();

api.use(bodyParser.json('limit:50mb'));
api.use(logger(process.env.NODE_ENV || 'dev'));

const router=express.Router();

api.get("/",(req,res)=>{
    res.status(200).send("Welcome to API!");
})

api.use((err,req,res,next)=>{
    console.error(err.stack);
    res.status(500).send('something broke!');
})

require('../api/company/company.route')(router);

api.use(router);

module.exports=api;