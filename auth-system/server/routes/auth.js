//import express
const express = require('express');

//initialize the express Router
const router = express.Router();

//import the developer created model component
const User = require('../models/User');

//create the register route
router.post('/register', async(req, res) => {
    //create user model instance
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: req.body.password
    })

    //svae the user data
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (error) {
        res.status(400).send(error);
    }
})

//login route
router.post('/login', (req, res) => {
    res.send('login route')
})

//export router using module
module.exports = router;