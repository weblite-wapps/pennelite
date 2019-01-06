// modules
import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import router from '../logic/router'

const app = express()

app.use(cors({ origin: '*' }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)

export default app
