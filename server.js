process.env.NODE_ENV= process.env.NODE_ENV || "dev"

if(process.env.NODE_ENV === "test"){
    require('dotenv').config('./.test.env');
}else{
    require('dotenv').config();
}

const api=require('./config/express'),
db=require('./config/mongoose');



api.use((err,req,res,next)=>{
    console.log("something broken ",err);
    res.send(500).json(err);
})


process.on("uncaughtException",(error)=>{
    console.error("something went wrong %s",error);    
});

api.listen(process.env.apiServerPort,()=>{
    console.log("server listening under the port no %s",process.env.apiServerPort);
})