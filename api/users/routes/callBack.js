const { authenticate } = require('passport');

async function callBackHandler (req, res, next) {
  return authenticate('auth0', function (err, user, info) {
    if (err) { 
      return next(err);
    }
    if (!user) { 
      return res.redirect('/login'); 
    }
    req.logIn(user, function (err) {
      if (err) { return next(err); }
      const returnTo = req.session.returnTo;
      delete req.session.returnTo;
      res.redirect(returnTo || '/user');
    });
  })(req, res, next);
}

module.exports = {
  callBackHandler,
}