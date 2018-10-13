const express = require('express');
const router = express.Router();
const User = require('../models/user.js');

//login
router.get('/auth',(req, res, next)=>{
  res.send('I am Login');
});

//Regustration
router.post('/register',(req, res, next)=>{
  let newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  /*console.log(newUser);
  res.sendStatus(200);*/
  newUser.save((err, user) => {
    if (err) {
      return res.send({
        success: false,
        message: 'failed to save the user'
      });
    }
    res.send({
      success: true,
      message: 'User Saved',
      user
    });
  });
});

module.exports = router;
// 1 ere version
/*login
router.get('/auth',(req, res, next)=>{
  res.send('I am Login');
});

//Regustration
router.get('/register',(req, res, next)=>{
  res.send('I am Registrated');
});*/
