var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/', function(req, res) {
  db.Picker.find()
  .then(function(restaurants) {
    res.json(restaurants);
  })
  .catch(function(error) {
    res.send(error);
  })
})

module.exports = router;
