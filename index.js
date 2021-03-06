require('dotenv').config()


var express = require('express'),
    app = express();
var pickerRoutes = require('./routes/picker');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname + "/public/"));
app.use(express.static(__dirname + "/views"));

app.get('/', function(req,res) {
  res.sendFile("index.html");
})

app.use('/api/picker', pickerRoutes);

app.listen(process.env.APP_PORT, function() {
  console.log('Build done!')
})
