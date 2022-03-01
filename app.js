const express = require('express');
const app = express();
const users = require('./routes/users');
const books = require('./routes/books');
const connectDB = require('./db/connect');
require('dotenv').config();

app.use(express.json());

app.use('/api/v1/users', users);

app.use('/api/v1/books', books);


const port = 10001;

const start = async() =>{
    try{
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`server running on port ${port}...`));

    }
    catch(error){
        console.log(error)
    }
}
start();
