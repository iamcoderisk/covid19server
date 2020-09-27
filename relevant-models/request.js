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

// const Tag = require('../models/tag');
// const Symptom = require('../models/symptom');


// const Category = require('../models/category');

const pointSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['Point'],
    required: true
  },
  coordinates: {
    type: [Number],
    required: true
  }
});

const RequestSchema = new mongoose.Schema({
  name: {type: String},
  address: Schema.Types.Mixed,
  location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      }
    },
  telephone: String,
  rating: Number,
  tags: [{ type: Schema.Types.ObjectId, ref:'Tag' }],
  symptoms: [{ type: Schema.Types.ObjectId, ref:'Symptom' }],
  telVerified: Boolean,
  created: Date,
  modified: Date
}, {collection: 'requests'});

RequestSchema.index({'location': '2dsphere'});
RequestSchema.set('strict', true);

const Request = module.exports = mongoose.model('Request', RequestSchema);

