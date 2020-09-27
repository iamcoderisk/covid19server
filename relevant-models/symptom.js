const mongoose = require('mongoose');
const validate = require('mongoose-validator');
mongoose.Promise = global.Promise;
mongoose.connect("mongodb+srv://dbDev:dbPass@cluster0.c0vpq.mongodb.net/covid?retryWrites=true&w=majority",
    {
     
      useUnifiedTopology: true, 
      useNewUrlParser: true, 
      useCreateIndex: true 
    }).then(()=>{
        console.log("connected")
    }).catch(err =>console.log(err))
    
var Schema = mongoose.Schema;



const SymptomSchema = new mongoose.Schema({
    name: String,
    description: String,
    order:Number,
    score: Number,
}, {collection: 'symptoms'});

const Symptom = module.exports = mongoose.model('Symptom', SymptomSchema);


