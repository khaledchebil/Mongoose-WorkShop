const mongoose = require('mongoose')

let PersonSchema = new mongoose.Schema({
    name: String,
    age: String,
    favoriteFoods : Array
})
module.exports = mongoose.model('Person', catSchema);