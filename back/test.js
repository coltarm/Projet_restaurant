const mongoose = require('mongoose');
require('dotenv').config();

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONG_URL);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  const useSchema = new Schema({
    id : ObjectId("id_user"),
    username : String,
    email: String,
    password: Buffer,
    comments: [{
       id_rest : ObjectId("id_restaurant"),
        commentary : String, 
        date_visite: Date,
        date_publication: Date,
        price: Number,
        public: Boolean,
        note : Number
      }],
    
  })

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

  })
}