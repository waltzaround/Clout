const { ActivityModel } = require('../model');

async function listActivitiesHandler (_, res) {
  const allActivities = await ActivityModel.find();

  return res.status(200).json({ activity: allActivities}).end();
}

module.exports = {
  listActivitiesHandler,
}