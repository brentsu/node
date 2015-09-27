var express = require('express');
var router = express.Router();

router.all('/', function(req, res, next) {
	res.send('I am yonghu root ');
});

router.all('/brent', function(req, res, next) {
	console.log('I am all user,what about you');
	next();
});


//yong hu get 
router.get('/brent', function(req, res, next) {
	res.send('I am brent ,who are you');
});


router.get('/users/:id',function(req,res,next){
	var id = req.params.id;
	if(id){
		res.send("my name is:"+id);
	}else{
		res.send("i am a anoymous");
	};
});


module.exports = router;
