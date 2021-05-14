const express = require ('express')
const mongoose = require('mongoose')
const app = express()
require('dotenv/config')
const postsRoute = require('./routes/posts.routes')


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/posts',postsRoute)



//ROUTES
app.get('/',(req,res)=>{
    res.send('We are on home');
})



//Connect to DB
mongoose.connect(process.env.DB_CONNECTION,{ useNewUrlParser: true },()=>{
    console.log('Connected to DB')
})  

app.listen(3000)