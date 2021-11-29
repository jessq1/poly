// import FacebookLogin from 'react-facebook-login';

// const FACEBOOK_APP_ID = config.FACEBOOK_APP_ID
import 'dotenv/config.js'

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import logger from 'morgan'
import cors from 'cors'

import { router as profilesRouter } from './routes/profiles'


import('./config/database')

const app = express()


app.use(express.static(path.join(path.dirname(fileURLToPath(import.meta.url)),'build')))
app.use(cors())
app.use(logger('dev'))
app.use(express.json())

app.use('/api/profiles', profilesRouter);




app.get("/*", function (req, res) {
  res.sendFile(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "build", "index.html")
  )
})

const port = process.env.PORT || 3001

app.listen(port, () => {
  console.log(`Express is listening on port ${port}.`)
})
