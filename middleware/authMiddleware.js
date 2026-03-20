const jwt = require('jsonwebtoken');

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

module.exports = { requireAuth };