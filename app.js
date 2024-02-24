const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app=express()

const mysqlModel = require('./models/mysqlmodel')
const  Patientroutes = require('./controllers/patientController');

const patientrecord = require('./models/mongoModel')


mongoose.connect('mongodb://localhost:27017/medical_records',{useNewUrlparser:true,useUnifiedTopology:true});
const db=mongoose.connection

db.on('error',(err) =>{
    console.log(err)
})

db.once('open',() =>{
    console.log("Db connected successfully")
})

app.use('/api/patients',Patientroutes) 

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

const port = 3001;
mysqlModel.query('SELECT 1')
    .then(()=>{
        console.log('Db connection is succeded')
        app.listen(port,()=>{
            console.log('server started at: ',port)
        })
    })
    .catch(err => console.log('Db Connection is failed.' +err))

