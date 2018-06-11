var db = require('../models');

exports.getRestaurants = function(req, res) {
  db.Picker.find()
  .then(function(restaurants) {
    res.json(restaurants);
  })
  .catch(function(error) {
    res.send(error);
  })
}

exports.addRestaurant = function(req, res) {
  db.Picker.create(req.body)
  .then(function(newPick) {
    res.status(201).json(newPick);
  })
  .catch(function(error) {
    res.send(error);
  })
}

exports.getRestaurant = function(req, res) {
  db.Picker.findById(req.params.restaurantId)
  .then(function(restaurant){
    res.json(restaurant)
  })
  .catch(function(error) {
    res.send(error);
  })
}

exports.updateRestaurant = function(req, res) {
  db.Picker.findOneAndUpdate({_id:req.params.restaurantId}, req.body, {new:true})
  .then(function(restaurant) {
    res.json(restaurant)
  })
  .catch(function(error) {
    res.send(error);
  })
}

exports.deleteRestaurant = function(req, res) {
  db.Picker.remove({_id:req.params.restaurantId})
  .then(function(){
    res.json({message:"Deleted restaurant"});
  })
  .catch(function(error){
    res.send(error);
  })
}

module.exports = exports;
