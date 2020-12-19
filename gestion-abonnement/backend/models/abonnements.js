const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let abonnementSchema = new Schema(
 {  
AbonnementType: {type: String},
AbonneFirstName: {type: String},
AbonnementTarif: {type: String},
Abonne: {type: String},
QrCodeAbonnement: {type: String},
}, {
collection: 'abonnements'
}

);

module.exports = mongoose.model('Abonnements', abonnementSchema);


