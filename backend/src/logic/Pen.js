import Pen from '../models/Pen'

export const savePen = ({ _id, title, writer, html, css, js }) =>
  Pen.findOneAndUpdate(
    _id ? { _id } : {},
    { writer, title, html, css, js },
    { upsert: true, new: true },
  )
    .select('_id')
    .exec()

// console.log(
//   'title: ',
//   title,
//   'writer: ',
//   writer,
//   'html: ',
//   html,
//   'css: ',
//   css,
//   'js: ',
//   js,
//   '_id: ',
//   _id,
// )
// console.log('_id: ', typeof _id)

export const incPenLikes = _id =>
  Pen.updateOne({ _id }, { $inc: { likeCnt: 1 } }).exec()

export const decPenLikes = _id =>
  Pen.updateOne({ _id }, { $dec: { likeCnt: 1 } }).exec()

export const deletePen = ({ writer, title }) =>
  Pen.deleteOne({ title, writer }).exec()

export const fetchLastNinePens = () =>
  Pen.find({}, { html: 0, css: 0, js: 0, __v: 0 })
    .limit(9)
    .exec()

export const fetchSinglePen = (writer, title) =>
  Pen.findOne({ writer, title }, { _id: 0, __v: 0 }).exec()
// console.log('writer, title :', writer, title)

export const fetchWriterPens = writer =>
  Pen.find({ writer }, { title: 1, _id: 0 }).exec()
// console.log('writer :', writer)
