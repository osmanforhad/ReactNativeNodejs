//define the express module
const express = require('express');

//define the mongooes module
const mongoose = require('mongoose');

//initial the express package
const app = express();

//initial the middleware
app.use(express.json());

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