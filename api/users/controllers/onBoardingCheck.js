const { UserModel } = require('../model');

async function insertUserIfNotExist(potentiallyNewUser) {
  const recordExist = await UserModel.exists({ id: potentiallyNewUser.id, email: potentiallyNewUser._json.email})

  if (recordExist) {
    return false;
  }
  const { id, displayName, picture, _json  } = potentiallyNewUser

  const newRecord = await UserModel.create({
    id,
    displayName,
    image: picture,
    onboarded: false,
    email: _json.email,
    profileUrl: null,
  })
  return newRecord;
}

module.exports = {
  insertUserIfNotExist,
}
