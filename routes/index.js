var express = require('express');
var router = express.Router();
var pg = require('pg');

var conString = "pg://postgres:root@localhost:5432/project";

var client = new pg.Client(conString);
client.connect();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Expresssdced' });
});

module.exports = router;
