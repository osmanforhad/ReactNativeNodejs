//import pcakages
const express = require('express');
const mongoose = require('mongoose');

//import the developer created component
const authRoutes = require('./routes/auth');

//inport the middleware which developer created component
const verifyToken = require('./routes/verifyToken');

//initialize the express app
const app = express();

//define the middle ware as body
app.use(express.json());

//creating the home route
app.get('/', (req, res) => {
    res.send('Welcome to the auth system');
})

//user profile route
app.get('/api/user/profile', verifyToken, (req, res) => {
    res.send('This is the user profile')
})

//use middleware for authRoutes
app.use('/api/users', authRoutes);

//connect with mongo DB
mongoose.connect('mongodb+srv://king_auth:Z9TeRBELeANfzGr8@cluster0.rfrgb.mongodb.net/auth_system?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //setup the port number
        app.listen(3000, () => console.log('Server is running'));
    })
    .catch(err => console.log(err))