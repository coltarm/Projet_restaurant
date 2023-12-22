require("dotenv").config();
const {MongoClient} = require('mongodb');
const express = require('express');

const app = express();
const port = 3000;

const client = new MongoClient(process.env.MONG_URL);

let conn;
try {
    conn = await client.connect()
} catch(e){
    console.error(e);
}

let 