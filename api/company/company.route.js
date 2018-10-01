
module.exports=(api)=>{
    api.get('/api/company',(req,res,next)=>{
        res.status(200).send("inside create company");
    })
}