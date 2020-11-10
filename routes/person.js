const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

const Person = require('../Models/Person')

router.post("/add",  (req,res)=>{
const {name, age, favoriteFoods} = req.body;
const newPerson = new Person({
    name, 
    age, 
    favoriteFoods
});

try {
    newPerson.save();
    res.send(newPerson);
} catch (error) {
    console.log('Add person faile', error)
}
});

router.get('/infoperson', async (req, res)=>{
const person = await Person.find()
try {
    res.send(person)
} catch (error) {
    console.log("fethcing failes", error)
}
})

router.put('/update/:_id', async (req, res)=>{
    const {_id} = req.params;
    const updated = await (Person.findByIdAndUpdate({_id},{$set: req.body}))
    try {
        res.send(updated)
    } catch (error) {
        console.log("updated person info  failes", error)
    }
    })


    router.delete('/delete/:_id', async (req, res)=>{
        const {_id} = req.params;
        const deleted = await (Person.findByIdAndDelete({_id}))
        try {
            res.send(deleted)
        } catch (error) {
            console.log("updated person info  failes", error)
        }
        })




module.exports = router;
