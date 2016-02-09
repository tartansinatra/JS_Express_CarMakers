var express = require('express');
var carRouter = express.Router();
var carMakers = require('../models/carMakers');
var bodyParser = require('body-parser');
carRouter.use(bodyParser.urlencoded( { extended: false} ));


carRouter.get('/', function(req, res){
  // INDEX
  res.render('cars/index', {carMakers: carMakers})
});


module.exports = carRouter;