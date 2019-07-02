import { Router } from 'express'
import {
  fetchLastNinePens,
  savePen,
  fetchSinglePen,
  fetchWriterPens,
  incPenLikes,
  decPenLikes,
} from './Pen'

import { likePen, dislikePen } from './User'

const router = Router()

router.get('/', (req, res) =>
  fetchLastNinePens()
    // .then(pens => console.log( pens, liked: true ))
    .then(pens => res.send(pens))
    .catch(() => console.log('there is not nine in db')),
)

router.post('/updateCurrentPen', ({ body }, res) => {
  // console.log('body :', body),
  savePen(body)
    // .then(resp => console.log(resp))
    .then(resp => res.send(resp))
    .catch(() => console.log("couldn't save current pen"))
})

router.get(
  '/fetchSinglePen',
  ({ query: { _id } }, res) => fetchSinglePen(_id).then(pen => res.send(pen)),
  // console.log(user, title),
)

router.get(
  '/fetchWriterPens',
  ({ query: { writer } }, res) =>
    fetchWriterPens(writer).then(pens => res.send(pens)),
  // console.log('query :', query),
)

router.get('/likePen', ({ query: { user, _id } }, res) => {
  // console.log(user, _id)
  likePen(user, _id)
    .then(() => res.send('liked succesfully'))
    .catch(() => console.log('unable to like'))
  incPenLikes(_id)
    .then(() => console.log('increased'))
    .catch(() => console.log('unable to increase'))
})

router.get('/dislikePen', ({ query: { user, _id } }, res) => {
  dislikePen(user, _id)
    .then(() => res.send('disliked succesfully'))
    .catch(() => console.log('unable to dislike'))
  incPenLikes(_id)
    .then(() => console.log('increased'))
    .catch(() => console.log('unable to increase'))
})

export default router
