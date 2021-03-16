//import express
const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//initialize the express Router
const router = express.Router();

//import the developer created model component
const User = require('../models/User');

//setup the user input validation for register
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
];

//method for generate a token
const generateToken = user => {
    return jwt.sign({
            _id: user._id,
            email: user.email,
            fullName: user.fullName
        },
        "SUPERSECRET123"
    );
}

//setup the user input validation for login
const loginValidate = [
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
    if (userExist) return res.status(400).send({ success: false, message: 'Email already exists' });

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
        //assign a token by calling generateToken method
        const token = generateToken(user);
        res.send({
            success: true,
            data: {
                id: savedUser._id,
                fullName: savedUser.fullName,
                email: savedUser.email
            },
            token
        });
    } catch (error) {
        res.status(400).send({ success: false, error });
    }
})

//login route
router.post('/login', loginValidate, async(req, res) => {

    //checking the validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    //check the email is exists
    const user = await User.findOne({ email: req.body.email })
    if (!user) return res.status(404).send({ success: false, message: "User is not registed" })

    //check the password is correct
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) return res.status(404).send({ success: false, message: "Invalid Email or Password" })

    //assign a token by calling generateToken method
    const token = generateToken(user);

    //send the response if email  exists and password is correct then with token header
    res.header('auth-token', token).send({ success: true, message: 'Logged in Successfully', token })
})

//export router using module
module.exports = router;