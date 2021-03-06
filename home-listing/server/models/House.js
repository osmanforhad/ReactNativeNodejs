//import mongooes
const mongoose = require('mongoose');

//define the schema
const HouseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    address: { type: String, required: true },
    homeType: String,
    description: String,
    price: { type: Number, required: true },
    image: String,
    yearBuilt: Number
})

//creating Model
module.exports = mongoose.model('House', HouseSchema);