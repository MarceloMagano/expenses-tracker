const mongoose = require('mongoose')

require('dotenv').config()
const server = require('./server')

// db connection
const uri = process.env.DB_URI
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true })
mongoose.connection.once('open', () => {
  console.log('MongoDB connection established successfully')
})

const port = process.env.PORT || 3000
server.listen(port, () => console.log(`API server started on ${port}`))

// TODO: structuring based on https://github.com/dbalas/koalerplate
