//import express package
const express = require('express');

//import express validator packag
const { check, validationResult } = require('express-validator');

//import the developer created model package
const House = require('../models/house');

//initial the router
const router = express.Router();

//define validation
const validate = [
    check('title')
    .isLength({ min: 3, max: 50 }).withMessage('Title should between 3 to 50 characters'),
    check('description')
    .isLength({ min: 10, max: 200 }).withMessage('Description should between 10 to 200 characters'),
    check('address')
    .isLength({ min: 10, max: 100 }).withMessage('Address should between 10 to 100 characters'),
    check('price')
    .isNumeric().withMessage('Pricre should be a Number'),
]

//defining the routes for insert data
router.post('/', validate, (req, res) => {
    //add validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ erros: errors.array() })
    }

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
});

//defining route for fetch all data from Database table  
router.get('/', (req, res) => {
    //find data by House model
    House.find()
        .then(houses => {
            res.send(houses)
        })
        .catch(err => console.log('err'))
});

//defining route for fetch a singe data using the id from Database table
router.get('/:id', (req, res) => {
    //grave the id from user request
    const houseId = req.params.id;
    //find data by House model
    House.findById(houseId)
        .then(house => {
            res.send(house);
        })
        .catch(err => console.log(err))
});

//definign route for update data
router.put('/:id', validate, (req, res) => {
    //grave the id from user request
    const houseId = req.params.id;
    //add validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).send({ erros: errors.array() })
    }
    //find data by House model
    House.findById(houseId)
        .then(house => {
            //override the value to update existing data of the requested id
            house.title = req.body.title;
            house.address = req.body.address;
            house.homeType = req.body.homeType;
            house.description = req.body.description;
            house.price = req.body.price;
            house.image = req.body.image;
            house.yearBuilt = req.body.yearBuilt;

            //update data
            return house.save();
        })
        //for get back the updated result
        .then(result => {
            res.send(result)
        })
        .catch(err => console.log(err))
});

//defining route for delete data
router.delete('/:id', (req, res) => {
    //grave the id from user request
    const houseId = req.params.id;
    //find data by House model
    House.findByIdAndRemove(houseId)
        .then(result => {
            res.send(result);
        })
        .catch(err => console.log(err))
});

//export for out put
module.exports = router;