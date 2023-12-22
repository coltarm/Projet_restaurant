const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const restSchema = new Schema({
  _id: {
    type: ObjectId,
    default: new ObjectId()
  },
  name: String,
  email: String,
  telephone_number: String,
  note_res: Number,
  adress: {
    country: String,
    city: String,
    street: String,
    number: String
  },
  comments: [{
    _id: {
      type: ObjectId,
      default: new ObjectId()
    },
    id_user: {
      type: ObjectId,
      ref: 'User'
    },
    commentary: String,
    date_visite: Date,
    date_publication: {
      type: Date,
      default: Date.now
    },
    price: Number,
    note: Number
  }]
});

const rest = mongoose.model('Restaurant', restSchema);

module.exports = rest;




/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const restSchema = new Schema({
    _id: ObjectId("id_restaurant"),
    name: String,
    email: String,
    telephone_number: String,
    note_res : Number,
    adress: {country: String,
            city: String,
            street: String,
            number:String,
            },
    comments:[{
      id_user : ObjectId("id_user"),
      commentary : String,
      date_visite: Date,
      date_publication : Date,
      price : Number,
      note : Number
    }]
  });


  const rest = mongoose.model('Restaurant', restSchema);

  module.export = rest;*/