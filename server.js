const express = require('express');
const mongoose = require('mongoose');
const config = require('config')


     
const app = express();

// Bodyparser Middleware 
app.use(express.json());

// DB config
const db = config.get('mongoURI');

// Connect to Mongo
mongoose
.connect(db , {useNewUrlParser: true ,useUnifiedTopology:true, useCreateIndex:true })
.then(()=>console.log('MongoDB successufully connected..'))
.catch(err=> console.log('conenction failed : ',err)) 

// const Item = require('./models/Items');
// Item.find().then((item)=>console.log(item))


// Use routes
app.use('/api/items',require('./routes/api/items'));
app.use('/api/user',require('./routes/api/user'));
app.use('/api/auth',require('./routes/api/auth'))

const PORT =  process.env.PORT ||5000 ;

app.listen(PORT, () => console.log(`server started on ${PORT}`))