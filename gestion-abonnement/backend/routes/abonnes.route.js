 
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


// get single abonne
abonneRoute.route('/:id').get((req, res, next) => 
{
    Abonne.findById(req.params.id, (error, data) => {
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
abonneRoute.post('/', (req, res) => {
    var emp = new Abonne({
        AbonneName: req.body.AbonneName,
        AbonneFirstName: req.body.AbonneFirstName,
        AbonneCin: req.body.AbonneCin,
        AbonnePhoneNumber: req.body.AbonnePhoneNumber,
        AbonneEtudiant: req.body.AbonneEtudiant,
        AbonnePhoto: req.body.AbonnePhoto,

    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Abonne Save :' + JSON.stringify(err, undefined, 2)); }
    });
});
// update abonne
abonneRoute.route('/:id').put((req, res, next) => 
{
    
    Abonne.findByIdAndUpdate(req.params.id, {$set: req.body}, (error, data) => {
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