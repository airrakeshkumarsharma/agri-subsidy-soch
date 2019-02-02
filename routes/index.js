var express = require('express');
var router = express.Router();
var monk = require('monk');  //get the monk javascript
var moment = require('moment'); //get the moment data
var dbs=monk('soch:Ramayana123@ds119765.mlab.com:19765/agri');//<dbuser>:<dbpassword>@ds119765.mlab.com:19765/agri
var account = dbs.get('account_details');
var mongo = require('mongodb');
/* GET home page. */
router.get('/', function(req, res, next) {

	res.render('index');
  
});
router.get('/upload', function(req, res){
	res.render("upload");
});
router.get('/insurance', function(req, res){
	res.render("insurance");
});
module.exports = router;
