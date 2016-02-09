var express = require('express');
var app = express();

var carMakers = require('./models/carMakers');
var expressLayouts = require('express-ejs-layouts');
var carRouter = require('./controllers/carRouter');

// APPLICATION SETTINGS
app.set('views', './views');
app.set('view engine', 'ejs');

// MIDDLEWARE
app.use(expressLayouts);
app.use('/cars', carRouter);
app.use(express.static(__dirname +'/public'));


app.get('/', function(req, res){   // request & response arguments
  res.render('index', {welcome: "Select a Car Manufacturer", carMakers: carMakers});
});

app.listen('3000', function(){
  console.log('Running on port 3000');
});