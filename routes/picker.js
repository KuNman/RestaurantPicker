var express = require('express');
var router = express.Router();
var db = require('../models');
var helpers = require('../helpers/picker.js')

router.route('/')
  .get(helpers.getRestaurants)
  .post(helpers.addRestaurant)

router.route('/:restaurantId')
  .get(helpers.getRestaurant)
  .put(helpers.updateRestaurant)
  .delete(helpers.deleteRestaurant)

module.exports = router;
