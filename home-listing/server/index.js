//import the express package
const express = require('express');

//import the mongooes package
const mongoose = require('mongoose');

//include the developer created package
const houses = require('./routes/houses');

//initial the express package
const app = express();

//initial the middleware
app.use(express.json());

//creating the home route
app.get('/', (req, res) => {
    res.send('Welcome to the house listing API');
});

//creating the houses route middleware using app object
app.use('/api/houses', houses);

//include .env file
require('dotenv').config();

/**
 * excess the env file with specific variable
 * and if not deinfe port in the env
 * 
 * it will excess the default port
 */
const port = process.env.PORT || 3000

//connecting with online mongo DB
mongoose.connect('mongodb+srv://node_react_native_1:WCGrpS8QAUaYsvyI@cluster0.rfrgb.mongodb.net/house_app?retryWrites=true&w=majority')
    .then(result => {
        //export the server out put
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
    .catch(err => console.log('err'))