import mongoose, { Schema } from 'mongoose'

const UserSchame = new Schema({
  user: String,
  likes: [String],
})

export default mongoose.model('User', UserSchame)
