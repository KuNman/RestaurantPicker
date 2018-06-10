var mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://172.17.0.1:27017/picker-api');

mongoose.Promise = Promise;

module.exports.Picker = require("./picker");
