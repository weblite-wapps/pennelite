import Pen from '../models/Pen'

export const savePen = async ({ _id, title, writer, html, css, js }) => {
  if (_id) {
    return Pen.findOneAndUpdate(
      { _id },
      { writer, title, html, css, js },
      { upsert: true, new: true },
    )
      .select({ _id, writer })
      .exec()
  } else {
    var pen = await new Pen({ title, writer, html, css, js }).save()
    // console.log('pen ', pen)
    return { _id: pen._id, writer: pen.writer }
  }
}

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
  Pen.find({}, { html: 0, css: 0, js: 0, __v: 0 }).exec()

export const fetchSinglePen = _id => Pen.findOne({ _id }, { __v: 0 }).exec()
// console.log('writer, title :', writer, title)

export const fetchWriterPens = writer =>
  Pen.find({ writer }, { title: 1, _id: 0 }).exec()
// console.log('writer :', writer)
