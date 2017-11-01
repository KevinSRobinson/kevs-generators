var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lookupListsSchema = new Schema({
    Item: String,
    List: String,
    Parent: String,
    CreatedOn: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('LookupList', lookupListsSchema);