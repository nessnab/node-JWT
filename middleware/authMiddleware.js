const jwt = require('jsonwebtoken');
const User = require('../models/users');

// check current user
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, 'martiny is cute secret', async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};

const requireAuth = (req, res, next) => {
  
  const token = req.cookies.jwt

  // check json web token exists & verified
  if (token) {
    jwt.verify(token, 'martiny is cute secret', (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect('/login');
      } else {
        console.log(decodedToken);
        next()
      }
    }) // secret same as in the authController
  } else {
    res.redirect('/login');
  }
}


module.exports = { checkUser, requireAuth };