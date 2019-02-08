import { Router } from 'express'
import {
  fetchLastNinePens,
  savePen,
  fetchSinglePen,
  fetchWriterPens,
} from './Pen'

const router = Router()

router.get('/', (req, res) =>
  fetchLastNinePens()
    .then(pens => res.send(pens))
    .catch(console.log('there is not nine in db')),
)

router.post(
  '/updateCurrentPen',
  ({ body }, res) =>
    savePen(body)
      .then(resp => res.send(resp))
      .catch(console.log("couldn't save current pen")),

  // console.log('body :', typeof body),
)

router.get(
  '/fetchSinglePen',
  ({ query: { writer, title } }, res) =>
    fetchSinglePen(writer, title).then(pen => res.send(pen)),
  // console.log(user, title),
)

router.get(
  '/fetchWriterPens',
  ({ query: { writer } }, res) =>
    fetchWriterPens(writer).then(pens => res.send(pens)),
  // console.log('query :', query),
)

export default router
