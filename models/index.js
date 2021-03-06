var mongoose = require('mongoose');
require('dotenv').config()

mongoose.set('debug', true);
mongoose.connect('mongodb://'+process.env.DOCKER_IP+':'+process.env.DB_PORT+'/picker-api');

mongoose.Promise = Promise;

module.exports.Picker = require("./picker");
