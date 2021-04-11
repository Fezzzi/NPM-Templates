/* eslint-disable no-console */
const axios = require('axios')
const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
require('dotenv').config()

app.use(cors({
  origin: `http://localhost:${process.env.DEV_PORT ?? 8081}`,
  credentials: true,
  optionsSuccessStatus: 204,
}))
app.options('*', cors())

app.use(bodyParser.json())

const client = axios.create({
  baseURL: `http://localhost:${process.env.SERVER_PORT}`,
  withCredentials: true,
  credentials: 'same-origin',
  timeout: 8000,
})

app.use(async (req, res) => {
  console.log('Proxy request to', req.url)
  const passResponse = response => {
    if (response == null) {
      console.log('Unexpected error')
      res.status(500)
      return
    }
    console.log(response.status)

    const { status, headers, data } = response
    res.status(status).set(headers).send(data)
  }

  client.request({
    url: req.url,
    method: req.method,
    headers: req.headers,
    params: req.params,
    data: req.body,
  })
    .then(passResponse)
    .catch(err => passResponse(err.response))
})

const port = process.env.PROXY_PORT ?? 8080
app.listen(port, () => console.log(`proxy listening on ${port}`))
