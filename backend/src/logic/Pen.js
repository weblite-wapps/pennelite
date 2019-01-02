// :)
import Pen from '../models/Pen'

export const savePen = ({ title, writer, html, css, js }) =>
  Pen.findOneAndUpdate(
    { title, writer },
    { html, css, js },
    { upsert: true },
  ).exec()

export const deletePen = ({ title, writer }) =>
  Pen.findOneAndDelete({ title, writer }).exec()

export const getLastNinePens = () =>
  Pen.find()
    .limit(9)
    .exec()

export const getWriterPens = ({ writer }) => Pen.find({ writer }).exec()
