var express = require('express');
var router = express.Router();
var crypto =require('crypto');

router.get('/login', checkNotLogin);
router.get('/login', function(req, res, next) {
	res.render('login');
});

router.post('/login',function(req,res){
   if(req.body.username !=='brent'){
       req.flash('error')
   } 
});

router.get('/register',function(req,res){
	res.render('register',{
		title:"用户注册"
    });
})

function checkNotLogin(req, res, next){
    if(req.session.user){
        req.flash('error', '已登陆');
        return res.redirect('/');
    }
    next();
}

module.exports = router;
