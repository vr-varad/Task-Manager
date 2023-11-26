const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()
const url = process.env.url

const connectDB = ()=>{
  return mongoose.connect(url,{dbName:'Task-Manager'})
}

module.exports = connectDB