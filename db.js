const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/myDB', {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log('Data Base connected'))
.catch((err)=>{
    console.log('DB conenction error')
  })


  //test change git