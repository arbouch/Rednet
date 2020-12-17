const { Router } = require('express');
const express = require('express');
const { error } = require('protractor');
const AbonneRoute = express.Router();

let Abonne = require('../models/abonnes');


AbonneRoute.route('/').get((req, res, next) => 
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

