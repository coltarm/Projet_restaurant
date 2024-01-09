const { connectDb } = require("./src/service/conn");
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config();

const port = process.env.PORT || 3000;

const startApplication = async () => {
  try {
    const client = await connectDb();
    const database = client.db("Colin");
    const user = database.collection("users");
    const restaurant = database.collection("restaurants");

    const app = express();

    app.get("/", async (req, res) => {
      try {
        const documents = await restaurant.find().toArray();
        res.json(documents);
      } catch (error) {
        console.error('Erreur lors de la récupération des documents :', error);
        res.status(500).send('Erreur serveur');
      }
    });

    app.get("/Restaurant/:idRest", async(req,res)=>{
      const idRest = req.params.idRest;
      const Res = await restaurant.find({"_id" : idRest}).toArray();
      res.json(Res);
  });
  
    app.get("/User/:username", async (req,res)=> {
        const idUser = req.params.username;
        const User = await user.find({"username": idUser}).toArray();
        res.json(User);
    });

    app.get("/commentary/:username", async (req,res)=> {
        const User = req.params.username;
        const commentary = await user.find({username:User},{username : 1, Comments : 1, projection: { password: 0 }}).toArray();
        res.json(commentary);

    })

    app.listen(port, () => {
      console.log(`Serveur lancé sur http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données :', error);
  }
};

startApplication();
