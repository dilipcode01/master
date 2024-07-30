const { Tasks, Subtasks } = require('../models');

module.exports.createTask = (task) => Tasks.create(task)
    .then((task) => {
        return task;
    })
    .catch((err) => {
        throw err;
    })

module.exports.updateTask = (id, task) => Tasks.update(task, { where: { id } })
    .then((task) => {
        return task;
    })
    .catch((err) => {
        throw err;
    })


module.exports.getAllTask = () => Tasks.findAll({ include: [Subtasks] })
    .then((task) => {
        return task;
    })
    .catch((err) => {
        throw err;
    })
