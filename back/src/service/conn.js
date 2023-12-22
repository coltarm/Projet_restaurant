require('dotenv').config();
const mongoose = require('mongoose');

connectDb().catch(err => console.log(err));

async function connectDb(){
  await mongoose.connect(process.env.MONG_URL)
  console.log('Db connecté');
}

module.exports = {
  connectDb
}