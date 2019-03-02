var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/signup', function(req, res, next) {
  let username = req.query['username'];
  let password = req.query['password'];
  console.log(username, password);
  res.send('OK');
});

module.exports = router;
