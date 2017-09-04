var express = require('express');
var R = require('ramda');
var router = express.Router();
var searchAndFilter = require("../lib/server/searchAndFilter.js"); 
var url = require('url');
var data = require("../lib/server/data.js");

/* GET data. */
router.get('/', function(req, res, next) {
  const sort = req.query.sort ? parseInt(req.query.sort) : 0;
  var facilities = req.query.facilities ? req.query.facilities : [];

  const makeSureItsAnArray = R.compose(R.flatten,R.of);

  const query = {
    Sort : sort,
    Facilities : makeSureItsAnArray(facilities) 
  }
  const result = { items : searchAndFilter(data, query)};

  res.send( result );
});

module.exports = router;
