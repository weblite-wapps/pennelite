import app from '../setup/server'
import { getLastNinePens, savePen } from './Pen'

app.get('/', (req, res) =>
  getLastNinePens()
    .then(pens => res.send(pens))
    .catch(console.log('there is not nine in db')),
)

app.post('/updateCurrentPen', (req, res) =>
  savePen().then(() =>
    res.send(res).catch(console.log("couldn't save current pen")),
  ),
)
