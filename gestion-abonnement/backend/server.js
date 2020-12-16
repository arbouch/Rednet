let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');


const app =express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));
app.use(cors());

const port = process.env.PORT || 3000;

const server = app.listen(port,() => {
    console.log('connected to port' + port);
    })
    