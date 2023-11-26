const TaskModel = require('../models/taskModel')
const asyncWrapper = require('../middleware/async')

console.log("Inside controller")

const getAllTasks = asyncWrapper(async (req,res)=>{
  const tasks = await TaskModel.find()
  console.log(tasks)
    return res.status(200).json({
      tasks: tasks,
      message: 'Successfully fetched all the tasks',
      success: true,
      error: {}
    })
}
)
const createTasks =  asyncWrapper(async(req,res)=>{
  const task = await TaskModel.create(req.body)
    return res.status(201).json({
      response: task,
      success: true,
      message: 'successfully created a task',
      error: true
    })
})

const getTask = asyncWrapper(async(req,res)=>{
  const task = await TaskModel.findById(req.params.id).exec()
    return res.status(200).json({
      respones: task,
      message: 'fetched a task',
      success: true,
      error: {}
    })
})

const updateTask = asyncWrapper(async (req,res)=>{
  const task = await TaskModel.findByIdAndUpdate({_id: req.params.id},req.body,{new: true, runValidators: true})
    return res.status(200).json({task})
})

const deleteTask = asyncWrapper( async(req,res)=>{
  await TaskModel.deleteOne({_id: req.params.id})
    return res.status(200).json({
      message: 'task deleted',
      success: true,
      error: {}
    })
  })




module.exports = {
  getAllTasks,createTasks,getTask,updateTask,deleteTask
}