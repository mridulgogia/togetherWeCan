const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const userRoutes = require('./routes/user');


app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Contest, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

mongoose.connect('mongodb+srv://mridul:Radhasoami-1-@cluster0-irqtw.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true , useCreateIndex: true})
.then(() => {
  console.log('Mongodb Atlas connected successfully');
})
.catch((error) => {
  console.log('Unable to connect to Mongodb Atlas!');
  console.log(error);
});
app.use(bodyParser.json());

app.use('/api/auth', userRoutes);

module.exports = app;