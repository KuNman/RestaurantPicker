var mongoose = require('mongoose');

var pickerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: "Name cannot be empty!"
  },
  removed: {
    type: Boolean,
    default: false
  },
  created_data: {
    type: Date,
    default: Date.now
  }
});

var Picker = mongoose.model('Picker', pickerSchema);

module.exports = Picker;
