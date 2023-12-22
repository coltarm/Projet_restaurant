require('dotenv').config;
const {connectDb} = require("./src/service/conn");
const {user} =require("./src/models/userScheme");
const {rest} = require("./src/models/restaurantScheme")
const express = require('express');


const port = 3000;

const app = express();

connectDb().catch(err => console.log(err));

app.get("/", (req,res) => {

});

app.listen(port, ()=>{
    console.log(`serveur lancé sur http://localhost:${port}`);
});
