// import bodyParser from 'body-parser'
import { Router } from 'express'
import { getLastNinePens, savePen } from './Pen'

// Router.use(JSON.stringify())

const router = Router()

router.get('/', (req, res) =>
  getLastNinePens()
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

export default router
