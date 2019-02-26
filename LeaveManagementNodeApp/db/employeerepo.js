const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(global.gConfig.database);
const Schema = mongoose.Schema;
const employeeSchema = new Schema({
    EMP_ID: {
        type: Number,
        required: true
    },
    EMP_NAME: {
        type: String,
        required: true
    },
    EMP_MAIL: {
        type: String,
        required: true
    },
    EMP_PHONE: {
        type: String,
        required: true
    },
    EMP_DEPT: {
        type: String,
        required: true
    },
    EMP_DOJ: {
        type: Date,
        required: true
    },
    LEAVE_BALANCE: {
        type: Number,
        required: true
    },
    EMP_MNG_ID:{
        type: Number,
        required: true
    }
});
const employee = mongoose.model("employee", employeeSchema, "employee");

const findManagerByEmployeeId = (EMP_ID, callback) => {
 console.log(EMP_ID);
    employee.findOne({EMP_ID:EMP_ID}, (err, res)=>{
        
        if(err) callback(err, null);
        if(res==null || res.EMP_MNG_ID==null){
            callback(null, "No rows returned");
        }else{
            employee.findOne({EMP_ID:res.EMP_MNG_ID},(err, res)=>{
                if(err) callback(err, null);
                
                callback(null, res);
             })
        }
      
       
      
    }) 
}

module.exports = { findManagerByEmployeeId }

