import mongoose from 'mongoose'

mongoose.connect(
  'mongodb://localhost:27017/Pennelite',
  { useNewUrlParser: true },
)
const db = mongoose.connection
db.on('connected', () => console.log('Connection Stablished!'))
db.on('error', console.log)
