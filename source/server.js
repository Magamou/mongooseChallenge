require("dotenv").config();
const express=require('express');
const participantRouter=require('../routes/participant.route');
const courseRouter=require('../routes/course.route');

const mongoose = require('mongoose')
const port = process.env.PORT || 8080
const host = process.env.HOST || 'localhost'

const db_url = process.env.MONGO_URL;


(async () => {
    try{    
        await mongoose.connect(db_url);
        console.log('Connected to the database!');
    }
    catch(e){
        console.log(e.message);
    }
})()


const app = express();

app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/',participantRouter);
app.use('/',courseRouter);

app.listen(port, function () {
    console.log(`Server listening  on ${host}:${port}`)
});
