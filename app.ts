/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/indent */
import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// eslint-disable-next-line @typescript-eslint/semi
app.listen(port, () => `Example app listening on port ${port}`)

app.post('/', (req, res) => {
  res.send('Hello new World!')
})
