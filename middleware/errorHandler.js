const errorHandler = (error,req,res,next)=>{
   if(error.name === 'CastError'){
          return res.status(404).json({
          message: 'task with this id does\'t exist',
        });
     }else{
          return res.status(500).json({
          message: 'error',
        });
     }
}

module.exports =errorHandler