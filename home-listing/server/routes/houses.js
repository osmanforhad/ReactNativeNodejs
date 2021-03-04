//import express package
const express = require('express');

//import the developer created model package
const House = require('../models/house');

//initial the router
const router = express.Router();

//defining the routes
router.post('/', (req, res) => {
    //create instance object of House class
    const house = new House({
        title: req.body.title,
        address: req.body.address,
        homeType: req.body.homeType,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image,
        yearBuilt: req.body.yearBuilt
    });

    //save the data
    house.save()
        .then(result => {
            res.send({
                message: 'House data created successfully!',
                data: result
            })
        })
        .catch(err => console.log(err))
})

//export for out put
module.exports = router;