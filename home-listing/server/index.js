//define the express module
const express = require('express');

//initial the express package
const app = express();

//initial the middleware
app.use(express.json());

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

//fetch data using the route paramiter
app.get('/api/listing/:id', (req, res) => {
    //fetch the data from homes array
    const home = homes.find(home => home.id === parseInt(req.params.id));
    if (!home) {
        res.status(404).send('The home with given ID is not found');
    }
    //return the data as paramiter calling
    res.send(home);
})

//making a post request to create new resource
app.post('/api/listing', (req, res) => {

    //input validation
    if (!req.body.type || !req.body.description) {
        //return a message
        return res.status(400).send('Type and Description is required');
    }

    //create an object
    const home = {
        id: homes.length + 1,
        type: req.body.type,
        description: req.body.description
    }

    homes.push(home);
    //return data
    res.send(home);
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