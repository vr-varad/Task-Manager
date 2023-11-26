const notFound = (req,res)=>{
  return res.status(404).send('Page Not found 404..')
}

module.exports = notFound