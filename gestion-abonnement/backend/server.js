let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let dbConfig  = require( './database/db');

//connecting to MongoDB
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {useNewUrlParser: true })
.then(() => {
console.log('database Connected !!');
}, error => { 
    console.log('database not Connected : ' + error);
});



const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extend:false}));
app.use(cors());

const port = process.env.PORT || 3000;

const abonneRoute = require('./routes/abonnes.route');
app.use('/api/Abonne', abonneRoute);
const abonnementRoute = require('./routes/abonnements.route');
app.use('/api/Abonnement', abonnementRoute);

const server = app.listen(port,() => {
    console.log('connected to port' + port);
    })
    