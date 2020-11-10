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


// require('./db');

// let Person = require('./Person')


// let persons = [
//     {
//         name: 'Khaled',
//         age: 20,
//         favoriteFoods: ['Pizza', 'Pasta']
//     },
//     {
//         name: 'Ali',
//         age: 30,
//         favoriteFoods: ['Lazagnia', 'Fruit']
//     },
//     {
//         name: 'Salah',
//         age: 40,
//         favoriteFoods: ['Cinse food', 'Salad']
//     }
// ]



// insert all the student array info into the collections
// Person.insertMany(persons,(err,result)=> {
//     if(err) throw err;
//     console.log(result)
//     })

//insert one by one
// let person = new Person({
//     name: 'Mohamed Salah',
//     age: 40,
//     favoriteFoods : ['Italien food','Asien Food']
// })
// person.save((err,doc)=>{
// if(err)
// throw err;
// console.log(doc)
// })

//search all the information inside person
// Person.find((err, data)=>{
// if(err) throw err;
// console.log(data)
// })

//to show all the people age >= 26
// Person.find({
//     age:{$gte:26}
// })
// .exec((err, result)=>{
//     if(err) throw err;
//     console.log(result)
//     })

//find the 1st person his age greater or equal to 26
// Person.findOne({
//         age:{$gte:26}
//     })
//     .exec((err, result)=>{
//         if(err) throw err;
//         console.log(result)
//         })

//find the person with a specific ID
// Person.findById({
//  _id:'5fa98b5ddd3cb622b0b99be6'
// })
// .exec((err, result)=>{
//     if(err) throw err;
//     console.log(result)
//     })


//to add humburget to the Array
// Person.findById({
//     _id:'5fa98b5ddd3cb622b0b99be6'
// })
// persons.favoriteFoods.push('Hamburger')
// persons.save((err,doc)=>{
// if(err) throw err;
// console.log(doc)
// })


//find the one name Khaled and update the fiel age to 10
// Person.findOneAndUpdate(
//     {name:'Khaled'} ,{age: 10},{ new: true }
// )
// .exec((err, result)=>{
//     if(err) throw err;
//     console.log(result)
//     })


//find a person with the name of Salah and delete it from the DB
// Person.findOneAndRemove(
//     {name: 'Salah'}
// )
// .exec((err, result)=>{
//     if(err) throw err;
//     console.log(result)
//     })



//check the person with that ID and Remove it 
// Person.findByIdAndRemove(
//     {_id: "5fa98b5ddd3cb622b0b99be5"}
//  )
// .exec((err, result)=>{
//     if(err) throw err;
//     console.log(result)
//     })




// Person.find({
//     age: {$gte: 26}
// })
// .limit(2)   //limit la list to 2 info only
// .sort({name:1}) //alphabetic order to name
// .select({name:1, age:0}) // show only name 
// .exec((err, result)=>{
// if(err) throw err;
// console.log(result)
// })




