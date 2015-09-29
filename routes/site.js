var express = require('express');
var router = express.Router();
var crypto =require('crypto');

router.get('/login', function(req, res, next) {
	res.render('login');
});


router.post('/login',function(req,res){
    console.log(req.body.userName);
    console.log(req.body.passwd);
   if(req.body.username !=='brent'){
       req.flash('error')
   } 
});
router.get('/register',function(req,res){
    console.log("registering");  
	res.render('register');
})



module.exports = router;
