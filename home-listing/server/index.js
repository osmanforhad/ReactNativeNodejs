//import the express package
const express = require('express');

//import the mongooes package
const mongoose = require('mongoose');

//import the cors package
const cors = require('cors');

//include the developer created package
const houses = require('./routes/houses');

//initial the express package
const app = express();

//use cors as a middleware
app.use(cors())

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
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.rfrgb.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, {

        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(result => {
        //export the server out put
        app.listen(port, () => console.log(`Server is running on port ${port}`));
    })
    .catch(err => console.log('err'))