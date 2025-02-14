require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const {SERVER_PORT} = process.env
const {createButton, getButtons, append, seed, buttonUpdate, preUpdateGetButton} = require('./controller.js')

app.use(cors())
app.use(express.json())

app.post('/seed', seed)
app.post('/button', createButton)
app.get('/buttons', getButtons)
app.get('/writing/:id', append)
app.put('update/:id', buttonUpdate)
app.get('/preUpdateGetButton/:id', preUpdateGetButton)







app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))