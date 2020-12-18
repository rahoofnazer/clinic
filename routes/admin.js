var express = require('express');
const { response } = require('../app');
var admin_helper = require('../helpers/admin-helper');
var router = express.Router();
const session = require('express-session');

const verifyAdmin=(req,res,next)=>{
  console.log("Verify admin called")
  if(req.session.admin){
    next()
  }else{
    res.redirect('/admin') 
  }
}


router.get('/', function(req, res, next) {
  res.render('admin/admin-login', { title: 'sdfdf' });
});

// router.post('/login',(req,res)=>{
// adminHelpers.doSignup(req.body).then((response)=>{
//   console.log(response)
//   res.redirect('/admin/viewProducts')
//   })
// })
router.get('/login',verifyAdmin,(req,res)=>{
  if(req.session.admin){
    res.render('admin/admin-dashboard')
  }else{
    res.redirect('/admin')  }
    req.session.adminLoginErr=false
})


router.post('/login',(req,res)=>{
  console.log(req.body)
  admin_helper.doLogin(req.body).then((response)=>{
    
    if(response.status){
      req.session.admin=true
      req.session.admin=response.admin
      res.redirect('/admin/login')
    }else{
      req.session.adminLoginErr=true
      res.redirect('/admin')
    }    
  })
})

router.get('/logout',verifyAdmin,(req,res)=>{

  req.session.admin=null 
  res.redirect('/admin') 
})

module.exports = router;
