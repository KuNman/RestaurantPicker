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

router.post('/', function(req, res) {
  db.Picker.create(req.body)
  .then(function(newPick) {
    res.status(201).json(newPick);
  })
  .catch(function(error) {
    res.send(error);
  })
})

module.exports = router;
