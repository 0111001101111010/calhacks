var ordrin = require("ordrin-api");
// Initialize with your application secret key
var dotenv = require('dotenv').load();
var ordrin_api = new  ordrin.APIs(process.env.ORDRIN, ordrin.TEST);
