 
let express = require('express');
 
const abonneRoute = express.Router();

let Abonne = require('../models/abonnes');
// get all abonnes

abonneRoute.route('/').get((req, res, next) => 
{
    Abonne.find((error, data) => {
        if (error) {
            return next(error)
        }else
        {
            res.json(data)
        }
    })
});

