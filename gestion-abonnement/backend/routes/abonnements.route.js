 
let express = require('express');
 
const abonnementRoute = express.Router();

let Abonnement = require('../models/abonnements');
// get all abonnes
abonnementRoute.route('/').get((req, res, next) => 
{
    Abonnement.find((error, data) => {
        if (error) {
            return next(error)
        }else
        {
            res.json(data)
        }
    })
});


// get single abonne
abonnementRoute.route('/:id').get((req, res, next) => 
{
    Abonnement.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        }else
        {
            res.json(data)
        }
    })
});
// insert abonne
/*abonneRoute.route('/').post((req, res, next) => 
{
    
    Abonne.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        }else
        {
            res.json(data)
        }
    })
});
*/


    
abonnementRoute.post('/', (req, res) => {
    var emp = new Abonnement({
        AbonnementType: req.body.AbonnementType,
        AbonnementTari: req.body.AbonnementTari,
        Abonne: req.body.Abonne,
        QrCodeAbonnement: req.body.QrCodeAbonnement,
        

    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Abonne Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
// update abonne
abonnementRoute.route('/:id').put((req, res, next) => 
{
    
    Abonnement.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => {
        if (error) {
            console.log(error);

            return next(error);
        }else
        {

            res.json(data);
            console.log("data updated !!!");

        }
    })
});
  

// delete abonne
abonneRoute.route('/:id').delete((req, res, next) => {
    Abonne.findOneAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error);
      } else {
        res.status(200).json({
          msg: data
        })
      }
    })
  })
  


module.exports =abonneRoute;