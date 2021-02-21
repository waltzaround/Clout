const { Router } = require('express');

const { internalRoute } = require('./internal');
const { userRoute } = require('./users');
const { activityRoutes } = require('./activities');

const backendRequestHandler = Router();
backendRequestHandler.use('/internal', internalRoute);
backendRequestHandler.use('/user', userRoute);
backendRequestHandler.use('/activity', activityRoutes);

module.exports = {
  backendRequestHandler
}