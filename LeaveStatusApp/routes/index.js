var express = require('express')
var app = express()
var leavehistoryRepo = require('../db/leavehistoryrepo')

// environment variables
process.env.NODE_ENV = 'development';

// uncomment below line to test this code against staging environment
// process.env.NODE_ENV = 'staging';

// config variables
const config = require('../config/config');


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  

app.get('/',(req,res)=>{
    res.send('Welcome!')
})

app.get('/getLeaveHistoryDetails/:id',(req,res)=>{
console.log(req.params.id);
    leavehistoryRepo.findLeaveHistoryByEmployeeId(req.params.id,(err,result)=>{
     if(err){
        res.status(500).send('Error');
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

app.listen(global.gConfig.node_port, () => {
    console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`);
});
