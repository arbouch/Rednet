let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbconfig=require('./database/db');

//connecting to MongoDB
mongos.connect(dbConfig, {yserNewUrlParser:true}).then(() => {
console.log('database Connected !!');
}, error => {console.log('database not Connected : ' + error);});



const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));
app.use(cors());

const port = process.env.PORT || 3000;

const AbonneRouter = require('./routes/abonnes.route');
app.use('/api/Abonne', AbonneRouter);

const server = app.listen(port,() => {
    console.log('connected to port' + port);
    })
    