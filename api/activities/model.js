const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
  title: String,
  description: String,
  image: String,
  dateClosed: Number,
  state: {
    type: String,
    enum: ['draft', 'open', 'closed'],
    default: 'draft',
  },
  type: {
    type: String,
    enum: ['ask', 'offer'],
    default: 'ask',
  },
  requesterId: String,
  userSignedUp: [String],
  userShowedUp: [String],
}, { timestamps: true });

const ActivityModel = model('activity', activitySchema);

module.exports = {
  ActivityModel,
}