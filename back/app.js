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
        res.json(User[0]);
    });

    app.get("/commentary/:username", async (req,res)=> {
        const User = req.params.username;
        const commentary = await user.find({username:User},{username : 1, Comments : 1, projection: { password: 0 , emamil:0}}).toArray();
        res.json(commentary[0]);

    });

 

    app.post("/commentary", async (req,res)=> {
        const username = req.body.username;
        const rest_name = req.body.password;
        const city = req.body.city;
        const price = req.body.price;
        const public = req.body.public;
        const rating = req.body.rating;
        const commentary = req.body.commentary;
        const test = await user.find({username : username}).toArray()
        if (rating<0 || rating>5){
            res.status(500).send("la note donnée ne correspond pas à la plage de données");
            return;

        }
        if (test.length===0){
            res.status(500).send("pas d'utilisateur portant ce nom");
            return;
        }
        await users.updateOne({username : username}, {$push : {Comments : {nom : rest_name, ville : city, commentary:commentary, date : new Date(), price: price, public: public, note: rating}}});
        res.send("Le commentaire à bien été ajouté");

    });



    app.listen(port, () => {
      console.log(`Serveur lancé sur http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Erreur lors de la connexion à la base de données :', error);
  }
};

startApplication();
