const errorHandler = require('./errorHandler')

const asyncWrapper = (fn)=>{
  return async(req,res,next)=>{
    try {
      await fn(req,res,next)
    } catch (error) {
      errorHandler(error,req,res)      
    }
  }
}

module.exports = asyncWrapper