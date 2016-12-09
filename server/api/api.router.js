'use strict';

var router = require('express').Router();
var User = require('./users/user.model');

router.use('/users', require('./users/user.router'));

router.use('/stories', require('./stories/story.router'));


router.post('/login', function (req, res, next) {
  User.findOne({
    where: req.body
  }).then(function (user) {
    if (user) {
      req.session.user = user;
      // req.session.cookie.expires = new Date(Date.now() + 60000);
      //.session.cookie.maxAge = 60000;
      res.sendStatus(200);
    } else {
      res.sendStatus(401);
    }
  }).catch(next);
});

router.post('/signup', function (req, res, next) {
  User.create(req.body)
  .then(function (user) {
  		req.session.user = user;
    	res.sendStatus(201);
    }
  ).catch(next);
});


module.exports = router;
