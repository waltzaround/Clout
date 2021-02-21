const { Router } = require('express');

const { listActivitiesHandler } = require('./listActivities');
const { insertNewActivityHandler} = require('./createNewActivity');

const activityRoutes = Router();

activityRoutes.get('/', listActivitiesHandler);
activityRoutes.post('/', insertNewActivityHandler);

module.exports = {
  activityRoutes,
}
