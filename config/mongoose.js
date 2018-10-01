const db=require('mongoose');

db.connect(process.env.db,{ useNewUrlParser: true });

const connection= db.connection;

db.Promise=Promise;

connection.on("error",(err)=>{
    console.log("mongoDB Connection error",err);
    process.exit();
});

connection.on("open",()=>{
    console.log("mongo db connected");
});

module.exports=db;