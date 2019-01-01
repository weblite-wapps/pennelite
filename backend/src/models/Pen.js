import mongoose from 'mongoose'

const PenSchema = new mongoose.Schema({
  writer: String,
  title: String,
  html: String,
  css: String,
  js: String,
})

export default mongoose.model('Pen', PenSchema)
