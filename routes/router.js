var express = require('express');
var router = new express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

module.exports = router;

//hashtagmiddleware
router.use(function (req, res, next) {
  console.log(req.path);
  console.log(req.body);
  next();
});

router.get('/', function (req, res) {
  console.log("Lavinian shores are the best shores");
  res.send("Turnus");
});
