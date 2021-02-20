const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  id: String,
  image: String,
  onboarded: {
    type: Boolean,
    default: false,
  },
  email: String,
  displayName: String,
  profileUrl: {
    type: String,
    default: null
  }
})

const UserModel = model('user', userSchema);

module.exports = {
  UserModel,
}
