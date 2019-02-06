import * as R from 'ramda'
import Pen from '../models/Pen'

export const savePen = async ({ title, writer, html, css, js }) =>
  Pen.updateOne({ title, writer }, { html, css, js }, { upsert: true }).exec()

export const deletePen = ({ writer, title }) =>
  Pen.update({ title, writer }).exec()

export const getLastNinePens = async () =>
  Pen.find({}, { writer: 1, title: 1, _id: false })
    .limit(9)
    .exec()

export const fetchSinglePen = async (writer, title) =>
  Pen.find({ writer, title }, { _id: 0, __v: 0 })
    .limit(1)
    .exec()
// console.log('writer, title :', writer, title)

export const getUserPens = writer =>
  Pen.find({ writer }, { title: 1, _id: 0 }).exec()
// console.log('writer :', writer)
