const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const subtaskController = require('../controllers/subtask.controller');

router.get('/task', taskController.getAllTask);
router.post('/task', taskController.createTask);
router.patch('/task', taskController.updateTask);


router.post('/subtask', subtaskController.createSubtask);
router.patch('/subtask', subtaskController.updateSubtask);


module.exports = router;
