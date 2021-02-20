const { Router } = require('express');

const { internalRoute } = require('./internal');
const { userRoute } = require('./users');

const backendRequestHandler = Router();
backendRequestHandler.use('/internal', internalRoute);
backendRequestHandler.use('/user', userRoute);

module.exports = {
  backendRequestHandler
}