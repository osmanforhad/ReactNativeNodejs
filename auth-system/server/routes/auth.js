//import express
const express = require('express');

//initialize the express Router
const router = express.Router();

//create the register route
router.post('/register', (req, res) => {
    res.send('register route')
})

//login route
router.post('/login', (req, res) => {
    res.send('login route')
})

//export router using module
module.exports = router;