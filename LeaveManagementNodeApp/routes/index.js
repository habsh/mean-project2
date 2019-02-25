var express = require('express')
var app = express()
var employeeRepo = require('../db/employeerepo')

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/',(req,res)=>{
    res.send('Welcome!')
})

app.get('/getManagerDetails/:id',(req,res)=>{
console.log(req.params.id);
    employeeRepo.findManagerByEmployeeId(req.params.id,(err,result)=>{
     if(err){
        res.status(500).send('Oops');
     }else{
        if(result=='No rows returned') 
        {
            res.status(204).end();
        }else{
            res.send(result);
        }
        
       
     }
  
    })
   
    
})

app.listen(3000,()=>{console.log("Listening on port 3000")})