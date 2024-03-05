// require('dotenv').config()

const express = require ('express')
const mongoose = require('mongoose')
const workouts = require('./routes/workouts')

const dbConnect = require("./utils/database");

const app = express()

app.use(express.json())

app.use((req,res,next)=>{
    console.log(req.path, req.method)
})
//routes
app.use('/api/workouts', workouts)
//connect to db
const PORT = 5000;

dbConnect().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at: http://localhost:${PORT}`);
    });
});


