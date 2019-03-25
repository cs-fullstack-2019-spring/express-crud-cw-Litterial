var express = require('express');
var router = express.Router();
var crimeCollection=require('../models/crimesModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
