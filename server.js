const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

     
const app = express();

// Bodyparser Middleware 
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
.connect(db , {useNewUrlParser: true ,useUnifiedTopology:true })
.then(()=>console.log('MongoDB successufully connected..'))
.catch(err=> console.log('conenction failed : ',err)) 




// Use routes
app.use('/api/items',items)


const PORT =  process.env.PORT ||5000 ;

app.listen(PORT, () => console.log(`server started on ${PORT}`))