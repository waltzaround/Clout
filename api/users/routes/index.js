const { Router } = require('express');
const passport = require('passport');

const { loginHandler } = require('./login');
const { logoutHandler } = require('./logout');
const { callBackHandler } = require('./callBack');
const { handleGetUserInfo } = require('./getMe')
const { authenticated } = require('../../middlewares');

const userRoute = Router();
userRoute.get('/login/', passport.authenticate('auth0', {
  scope: 'openid email profile'
}), loginHandler);
userRoute.get('/callback', callBackHandler);
userRoute.get('/logout', logoutHandler)
userRoute.get('/me', authenticated, handleGetUserInfo);

module.exports = {
  userRoute,
}
