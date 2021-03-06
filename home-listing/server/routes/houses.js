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
})

//defining route for fetch data from Database  
router.get('/', (req, res) => {
    House.find()
        .then(houses => {
            res.send(houses)
        })
        .catch(err => console.log('err'))
});
//export for out put
module.exports = router;