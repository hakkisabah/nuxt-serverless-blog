const mongoose = require('mongoose')
const { Schema } = mongoose
const schema = new Schema(
  {
    user_id: {
      type: Number,
      required: true,
      index: true,
      unique: true,
    },
    screen_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)
schema.statics.saveUser = async function (payload) {
  const user = new this(payload)
  try {
    return await user.save()
  } catch (e) {
    throw e
  }
}

schema.statics.findUser = async function (payload) {
  try {
    return await mongoose.model('User', schema).findOne(payload)
  } catch (e) {
    throw e
  }
}

exports.User = mongoose.model('User', schema)
