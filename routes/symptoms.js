/***
* author: Prince Darlington
* project: covid19 test
*/

var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var  Symptom  =  require("../relevant-models/Symptom");

router.get('/list',(req,res,next)=>{
    Symptom.find({},(err,data)=>{
        if(!err){
            res.send(data)
            
            console.log(data)
        }else{
            throw err;
        }
    })
})
module.exports = router;
