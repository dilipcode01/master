const { Subtasks } = require('../models');

module.exports.createSubtask = (subtask) => Subtasks.create(subtask)
    .then((subtask) => {
        return subtask;
    })
    .catch((err) => {
        throw err;
    })

module.exports.updateSubtask = (id, subtask) => Subtasks.update(subtask, { where: { id } })
    .then((subtask) => {
        return subtask;
    })
    .catch((err) => {
        throw err;
    })

