var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/', function(req, res){
  res.sendFile(path.resolve('./library/public/index.html'));
});

module.exports = router;
