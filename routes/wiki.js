var express = require('express');
var router = new express.Router();
var models = require ('../models');

router.get('/', function (req, res) {
   //res.render('addpage');
});

router.post('/', function (req, res) {
  res.send("SO columbia");
});

router.get('/add', function (req, res) {
  res.render('addpage');
});

router.get('/users', function (req, res) {
  var what = models.User;
  res.send(what);
});

module.exports = router;
