// modules
import http from 'http'
// components
import app from './server'
import './mongodb'

// http.createServer(app).listen(3080)
app.listen(4200, () => console.log('listening  4200'))
