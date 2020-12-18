var express = require('express');
const { response } = require('../app');
var admin_helper = require('../helpers/admin-helper');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/admin-login', { title: 'sdfdf' });
});

// router.post('/login',(req,res)=>{
// adminHelpers.doSignup(req.body).then((response)=>{
//   console.log(response)
//   res.redirect('/admin/viewProducts')
//   })
// })

router.post('/login',(req,res)=>{
  console.log(req.body)
  admin_helper.doLogin(req.body).then((response)=>{
    console.log(response)
    res.render('admin/admin-dashboard')
  })
})
module.exports = router;
