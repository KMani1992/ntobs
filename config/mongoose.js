const db=require('mongoose');
const q=require("q");

db.connect(process.env.db,{ 
    useCreateIndex: true, 
    useNewUrlParser: true 
});

const connection= db.connection;

db.Promise=q.Promise;

connection.on("error",(err)=>{
    console.log("mongoDB Connection error",err);
    process.exit();
});

connection.on("open",()=>{
    console.log("mongo db connected");
});

require('../api/company/company.model');
require('../api/operator/operator.model');
require('../api/parameter_control/pcontrol.model');
require('../api/product/product.model');
require('../api/sales/sales.model');

module.exports=db;