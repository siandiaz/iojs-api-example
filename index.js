'use strict'

import http from 'http'
import mongoose from 'mongoose'
import router from './router'

const server = http.createServer()
const port = process.env.PORT || 3000

mongoose.connect('mongodb://localhost/directory', onDBConnect)
server.on('request', router)
server.on('listening', onListening)

function onDBConnect (err, res) {
  if (err) console.log(`ERROR: on connecting to database, ${err}`)
  else {
    console.log(`Connection established to Database`)
    server.listen(port)
  }
}

function onListening () {
  console.log(`Server listening on http://localhost:${port}`)
}
