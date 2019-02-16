import Pen from '../models/Pen'

export const savePen = ({ title, writer, html, css, js }) =>
  Pen.updateOne({ title, writer }, { html, css, js }, { upsert: true }).exec()

export const updatePenLikes = ({ title, writer, likeCnt }) =>
  Pen.updateOne({ title, writer }, { likeCnt: likeCnt + 1 }).exec()

export const deletePen = ({ writer, title }) =>
  Pen.deleteOne({ title, writer }).exec()

export const fetchLastNinePens = () =>
  Pen.find({}, { writer: 1, title: 1, likeCnt: 1, _id: 0 })
    .limit(9)
    .exec()

export const fetchSinglePen = (writer, title) =>
  Pen.findOne({ writer, title }, { _id: 0, __v: 0 }).exec()
// console.log('writer, title :', writer, title)

export const fetchWriterPens = writer =>
  Pen.find({ writer }, { title: 1, _id: 0 }).exec()
// console.log('writer :', writer)
