require('dotenv').config();
const {MongoClient} = require('mongodb');


const user = "Username";

const password = "MDP";

const adress = "193.48.125.44";


const MONG_URL = "mongodb://" + user + ":" + password + "@" + adress + ":27017/?authMechanism=DEFAULT&authSource=admin";


connectDb().catch(err => console.log(err));

async function connectDb(){
  console.log(MONG_URL);
  const client = new MongoClient(MONG_URL);
  try{
  await client.connect();
  console.log('Db connecté');
  return client;
  }
  catch(e){
    console.log("une erreur lors de la connection à la base de données est survenu" + e);

  }
}

module.exports = {
  connectDb,
}