//import dependencies
require('dotenv').config();

//console.log(process.env.DATABASE);

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//Initialiser l'application avec express
const app = express();

const UserRoutes = require('./routes/users');

//connection à la base de données
mongoose.connect(process.env.DATABASE, { useMongoClient: true});
mongoose.connection.on('connected', () => {
  console.log('connected to the database');
});
mongoose.connection.on('Error', (err) => {
  console.log('Unable to connect to the database'+ err);
});

//l'initialisation du port
const _PORT = process.env.PORT;

// --------------MLiddlewares------
app.use(bodyParser.json());

// --------------MLiddlewares------
app.get('/', (req, res, next)=>{
  res.send('I am alive')
});

app.use('/users', UserRoutes);

//start du server
app.listen(_PORT, () => {
  console.log('Server Started');
});
