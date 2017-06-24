var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var peopleSchema = new Schema({



        FirstName: {
            type: string,
            default: ''
        },



        LastName: {
            type: string,
            default: ''
        },



        Options: {
            type: lookup,
            default: ''
        },



        Age: {
            type: integer,
            default: ''
        },



        RegistrationDate: {
            type: date,
            default: ''
        },



});

module.exports = mongoose.model('Person', peopleSchema);