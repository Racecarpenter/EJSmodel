var express = require('express');
var router = express.Router();
var posts = require('../db/config');

router.get('/', function(req, res) {
  res.render('posts', {
    postList: posts.find()
  });
})

module.exports = router;
