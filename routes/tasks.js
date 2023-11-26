const express = require('express')

const {getAllTasks,createTasks,getTask,updateTask,deleteTask} = require('../controllers/taskController')

const router = express.Router()

// router.get('/')
// router.post('/')
// router.route('/').get(getAllTasks).post(createTasks)
// router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)

router.get('/', getAllTasks)
router.post('/', createTasks)
router.get('/:id',getTask)
router.patch('/:id',updateTask)
router.delete('/:id',deleteTask)

module.exports = router