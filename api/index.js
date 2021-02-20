const { Router } = require('express');

const { internalRoute } = require('./internal')

const backendRequestHandler = Router();
backendRequestHandler.use('/internal', internalRoute);

module.exports = {
  backendRequestHandler
}