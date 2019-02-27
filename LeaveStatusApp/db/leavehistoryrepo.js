const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect(global.gConfig.database);
const Schema = mongoose.Schema;
const leavehistorySchema = new Schema({
    LEAVE_ID: {
        type: Number,
        required: true
    },
    NUMBER_OF_DAYS: {
        type: Number,
        required: true
    },
    START_DATE: {
        type: Date,
        required: true
    },
    END_DATE: {
        type: Date,
        required: true
    },
    LEAVE_STATUS: {
        type: String,
        enum: ['APPROVED', 'PENDING', 'DENIED'] 
        required: true
    },
    APPLIED_ON: {
        type: Date,
        required: true
    },
    MANAGER_COMMENTS: {
        type: String,
        required: true
    },
    EMP_ID:{
        type: Number,
        required: true
    },
    REASONS:{
        type: String,
        required: true
    },
    LEAVE_TYPE:{
        type: String,
        enum: ['EL'],
        required: true 
    }
});
const employee = mongoose.model("leavehistory", leavehistorySchema, "leavehistory");

const findLeaveHistoryByEmployeeId = (EMP_ID, callback) => {
 console.log(EMP_ID);
    employee.find({EMP_ID:EMP_ID}, (err, res)=>{
        
        if(err) callback(err, null);
        if(res==null || res.EMP_ID==null){
            callback(null, "No rows returned");
        }else{
            leavehistory.find({EMP_ID:res.EMP_ID},(err, res)=>{
                if(err) callback(err, null);
                
                callback(null, res);
             })
        }
      
       
      
    }) 
}

module.exports = { findManagerByEmployeeId }

