
enter in POSTMAN 

POST : http://localhost:3000/add
to add new person with object:
{
    "name": "Fouln",
    "age": number,
    "favoriteFoods": ["Food1","Food2']
}


  GET : http://localhost:3000/infoperson
  to show all the information in the collection



PUT : http://localhost:3000/update/:_id
choose a person ID and you can modify his name, age or add or delete some food 
{
    "name": "Fouln",
    "age": number,
    "favoriteFoods": ["Food1","Food2']
}

DELETE: http://localhost:3000/delete/:_id
to delete one person from the collection, check his ID and enter it instead in the URL
