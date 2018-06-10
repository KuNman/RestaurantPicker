var express = require('express'),
    app = express();

var pickerRoutes = require('./routes/picker');

require('dotenv').config()

app.get('/', function(req,res) {
  res.send('Root');
})

app.use('/api/picker', pickerRoutes);

app.listen(process.env.PORT, function() {
  console.log('Build done!')
})
