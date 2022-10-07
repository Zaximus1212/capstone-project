require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const SERVER_PORT = 4004
const {createButton, getButtons, getWriting} = require('./controller.js')

app.use(express.json())
app.use(cors())

app.post('/button', createButton)
app.get('/buttons', getButtons)
app.get('/button', getWriting)







app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))