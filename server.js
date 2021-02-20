const express = require('express')
const bodyParser = require('body-parser');
const next = require('next')

const { backendRequestHandler } = require('./api');

const port = parseInt(process.env.PORT, 10) || 8000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const nextJsRequestHandler = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()
  server.use(bodyParser.urlencoded({ extended: true }))
  server.use(bodyParser.json())

  server.use('/api', backendRequestHandler);
  server.all('*', (req, res) => {
    return nextJsRequestHandler(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
