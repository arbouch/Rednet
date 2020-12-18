const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let abonnementSchema = new Schema(
 {  
    AbonnementType: {type: String},
AbonneFirstName: {type: String},
AbonnementTarif: {type: String},
Abonne: {type: String},
QrCodeAbonnement: {type: Boolean},
}, {
collection: 'abonnements'
}

);

module.exports = mongoose.model('Abonnement', abonnementSchema);


