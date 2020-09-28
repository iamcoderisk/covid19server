/***
* author: Prince Darlington
* project: yokesolution
*/
var moment = require('moment'); // require
var express = require('express');
const mongoose = require('mongoose');
var router = express.Router();
var  Request  =  require("../relevant-models/request");
router.post('/list',(req,res)=>{
    // res.send("something happened")
    // // moment('01/12/2016', 'DD/MM/YYYY', true).format()
    var a = moment(req.body.from,'MM/DD/YYYY',true).format(); 
    var b = moment(req.body.to,'MM/DD/YYYY',true).format();
   
    let query = {created: {$gte: a, $lt: b} };

   Request
    .find(query)
    .exec((err, data) => {
        res.send([data])
    } 
    
    )
    

})
module.exports = router;
