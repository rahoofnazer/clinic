var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('admin/admin-login', { title: 'sdfdf' });
});

router.post('/login',(req,res)=>{
  res.render('admin/admin-dashboard')
})
module.exports = router;
