//import express
const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

//initialize the express Router
const router = express.Router();

//import the developer created model component
const User = require('../models/User');

//setup the user input validation
const validate = [
    check('fullName')
    .isLength({ min: 2 })
    .withMessage('Your full name is required'),
    check('email')
    .isEmail()
    .withMessage('Please provide a valid email'),
    check('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at list 6 character')
]

//create the register route
router.post('/register', validate, async(req, res) => {

    //checking the validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //checking the user exists or not
    const userExist = await User.findOne({ email: req.body.email });
    if (userExist) return res.status(400).send('Email already exists');

    //generate salt and password Hashing
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    //create user model instance to save the data
    const user = new User({
        fullName: req.body.fullName,
        email: req.body.email,
        password: hashPassword
    })

    //svae the user data
    try {
        const savedUser = await user.save();
        res.send({ id: savedUser._id, fullName: savedUser.fullName, email: savedUser.email });
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