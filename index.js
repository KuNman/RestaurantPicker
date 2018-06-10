var express = require('express'),
    app = express();

require('dotenv').config()

app.get('/', function(req,res) {
  res.send('Hello world!');
})

app.listen(process.env.PORT, function() {
  console.log('Build done!')
})
