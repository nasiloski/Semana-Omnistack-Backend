const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(cors())

const dbUrl = 'mongodb://localhost:27017/semana_omnistack'
const options = { poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true }

mongoose.connect(dbUrl, options)
mongoose.set('useCreateIndex', true)

app.use(routes)

app.listen(3333)