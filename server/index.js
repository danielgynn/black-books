'use strict';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var goodreads = require('goodreads');
var request = require('request');

var app = express();
var router = express.Router();

var port = process.env.PORT || 9000;

mongoose.connect('mongodb://danielgynn:secret@ds129422.mlab.com:29422/black-books');
var gr = new goodreads.client({ 'key': 'xidaoByhpk29l7mQcbxEIQ', 'secret': '5AIICDHHBlmOD96SRkckR4pkFTMOsmgK7LPORNoCGLg' });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', function(req, res) {
  res.json({ message: 'API is running!'});
});

router.get('/library', function (req, res) {
  var url = 'https://www.goodreads.com/author/show/18541?format=xml&key=xidaoByhpk29l7mQcbxEIQ';

  request(url, function(err, response, body) {
    res.json(body);
  });
});

app.use('/api', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
