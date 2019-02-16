import mongoose from 'mongoose'

const PenSchema = new mongoose.Schema({
  likeCnt: { type: Number, default: 12 },
  writer: String,
  title: String,
  html: String,
  css: String,
  js: String,
})
// timeStamps
// disable __v
// composite index of writer, title
// lean
export default mongoose.model('Pen', PenSchema)
