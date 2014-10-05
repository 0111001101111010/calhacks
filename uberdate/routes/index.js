var express = require('express');
var router = express.Router();

var ordrin = require("ordrin-api");
// Initialize with your application secret key
var ordrin_api = new  ordrin.APIs("yrz9_WjUQ0g221FCn7LQhUvJv7ecYoZGZ4njrFwBaQE", ordrin.TEST);

/* GET home page. */
router.get('/', function(req, res) {
  ordrin_api.delivery_list({
    datetime: "ASAP",
    addr: "2299 Piedmont Ave",
    city: "Berkeley",
    state: "CA",
    zip: "94720"
  }, function (err, data) {
    if (err){
      console.error(err);
    }
    console.log(data);
    res.send(data);
  });
});

module.exports = router;
