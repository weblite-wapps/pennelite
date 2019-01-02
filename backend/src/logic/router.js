// import bodyParser from 'body-parser'
import app from '../setup/server'
import { getLastNinePens, savePen } from './Pen'

app.get(
  '/',
  (req, res) => console.log('sawwwwwwww'),
  // getLastNinePens()
  //   .then(pens => res.send(pens))
  //   .catch(console.log('there is not nine in db')),
)

app.post(
  '/updateCurrentPen',
  (req, res) => console.log('yooooohooo'),

  // savePen().then(() =>
  //     res.send(res).catch(console.log("couldn't save current pen")),
  //   ),
)

export default router
