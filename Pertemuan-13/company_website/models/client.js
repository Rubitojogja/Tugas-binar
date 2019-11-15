var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ClientSchema = new Schema({
    name: {type: String},
    address: {type: String},
    total_project:{type: Number},
    status: {type: String, required: true, enum: ['Done', 'Progress'], default:'Done'},

});
module.exports = mongoose.model('Client', ClientSchema);
