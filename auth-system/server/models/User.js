const mongoose = require('mongoose');

//creating the User schema
const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

//creating Model for the User schema
module.exports = mongoose.model('User', userSchema);