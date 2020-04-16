const express = require('express')
const cors    = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const nodemon = require('nodemon')

const app = express()

const PORT = process.env.PORT || 444

// app.get('/', (req, res) => {
//     res.send('<h2>Node Server Is runing </h2>')
// })

app.use(cors())

app.use(express.static('public'))

app.listen(PORT, () => {
    console.log('PORT IS RUNING' + PORT)
})