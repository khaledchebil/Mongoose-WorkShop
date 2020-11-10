const mongoose = require('mongoose')

let PersonSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favoriteFoods : Array
})

module.exports = mongoose.model('Person', PersonSchema);