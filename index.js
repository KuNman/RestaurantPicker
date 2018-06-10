var express = require('express'),
    app = express();

var pickerRoutes = require('./routes/picker');

require('dotenv').config()

app.get('/', function(req,res) {
  res.send('Root');
})

<<<<<<< HEAD
app.use('/api/picker', pickerRoutes);

=======
>>>>>>> parent of 591f3b0... Test gitingore
app.listen(process.env.PORT, function() {
  console.log('Build done!')
})
