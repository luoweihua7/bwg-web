import express from 'express'

const app = express()

app.use(express.json())
app.get('*', (req, res) => {
  // Validate, sanitize and send
  console.log('hello world');
  res.status(200).json({ ret: 0 })
})

export default {
  path: '/api/bwg',
  handler: app
}
