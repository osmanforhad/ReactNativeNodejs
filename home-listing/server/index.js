//define the express module
const express = require('express');

//initial the express package
const app = express();

//include .env file
require('dotenv').config();

//create an array of object
const homes = [{
        id: 1,
        type: 'Apartment',
        description: 'Well furnished appartment'
    },
    {
        id: 2,
        type: 'Flat',
        description: 'Well furnished flat at flateville'
    }
]

//define the get express request server
app.get('/', (req, res) => {
    res.send('Wellcome to Express');
});

//define the route
app.get('/api/listing', (req, res) => {
    //return the array data
    res.send(homes);
})

/**
 * excess the env file with specific variable
 * and if not deinfe port in the env
 * 
 * it will excess the default port
 */
const port = process.env.PORT || 3000

//export the server out put
app.listen(port, () => console.log(`Server is running on port ${port}`));