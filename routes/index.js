var express = require('express');
var router = express.Router();
var monk = require('monk');  //get the monk javascript
var moment = require('moment'); //get the moment data
var dbs=monk('agri:Ramayana123@ds119765.mlab.com:19765/agri');
mongodb://<dbuser>:<dbpassword>@ds119765.mlab.com:19765/agri
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/upload', function(req, res){
	res.render("upload");
});
module.exports = router;
