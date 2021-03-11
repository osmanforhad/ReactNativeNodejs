//import express
const express = require('express');

//import the developer created component
const authRoutes = require('./routes/auth');

//initialize the express app
const app = express();

//creating the home route
app.get('/', (req, res) => {
    res.send('Welcome to the auth system');
})

//use middleware for authRoutes
app.use('/api/users', authRoutes);

//setup the port
app.listen(3000, () => console.log('Server is running'));