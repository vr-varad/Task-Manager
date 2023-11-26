const express = require('express')
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
dotenv.config()

const port = process.env.port || 3000
const apiRoutes = require('./routes/tasks')
const connectDB = require('./db/connect')
const notFound = require('./middleware/notFound')

const app = express()
app.use(express.static('./public'))
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/api/v1/tasks',apiRoutes)
const start = async()=>{
  try {
    await connectDB()
    app.listen(port,'0.0.0.0',()=>{console.log('Server Started at port',port)})
  } catch (error) {
    console.log(error)
  }
}

start()