const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
const userSchema = new Schema({
  _id: {
    type: ObjectId,
    default: new ObjectId()
  },
  username: String,
  email: String,
  password: Buffer,
  comments: [{
    _id: {
      type: ObjectId,
      default: new ObjectId()
    },
    id_rest: {
      type: ObjectId,
      ref: 'Restaurant'
    },
    commentary: String,
    date_visite: Date,
    date_publication: {
      type: Date,
      default: Date.now
    },
    price: Number,
    public: Boolean,
    note: Number
  }]
});

const user = mongoose.model('User', userSchema);

module.exports = user;




/*const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  const userSchema = new Schema({
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
    
  });

 

  const user = mongoose.model('User', userSchema);

  module.exports = user;*/

