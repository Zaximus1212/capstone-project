// require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const SERVER_PORT = 4004
const {createButton, getButtons, append, seed} = require('./controller.js')

app.use(cors())
app.use(express.json())

app.post('/seed', seed)
app.post('/button', createButton)
app.get('/buttons', getButtons)
app.get('/buttons/:id', append)







app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))