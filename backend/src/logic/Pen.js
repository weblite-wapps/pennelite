// :)
import Pen from '../models/Pen'

export const savePen = async ({ title, writer, html, css, js }) =>
  Pen.updateOne({ title, writer }, { html, css, js }, { upsert: true }).exec()

export const deletePen = ({ title, writer }) =>
  Pen.update({ title, writer }).exec()

export const getLastNinePens = async () =>
  Pen.find()
    .limit(1)
    .exec()

export const getWriterPens = ({ writer }) => Pen.find({ writer }).exec()
