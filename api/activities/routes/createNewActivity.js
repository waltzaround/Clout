const { ActivityModel } = require('../model');

async function insertNewActivityHandler(req, res) {
  const { title, description, image, dateClosed, type, requesterId } = req.body;

  const insertedActivity = await ActivityModel.create({
    title,
    description,
    image,
    dateClosed,
    type,
    requesterId,
    userSignedUp: [],
    userShowedUp: [],
  })

  return res.status(200).json({ newActivity: insertedActivity }).end();
}

module.exports = {
  insertNewActivityHandler,
}