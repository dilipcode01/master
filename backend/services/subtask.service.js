const subtaskRepository = require('../repositories/subtask.repository');

module.exports.createSubtask = (subtask) => new Promise(async (resolve, reject) => {
    try {
        let createdTodo = await subtaskRepository.createSubtask(subtask).catch((err) => reject(err));
        resolve(createdTodo);        
    } catch (err) {
        reject(err);
    }
})

module.exports.updateSubtask = (subtask) => new Promise(async (resolve, reject) => {
    try {
        let taskId = subtask.id;
        delete subtask.id;
        subtask = await subtaskRepository.updateSubtask(taskId, subtask).catch((err) => { throw err });
        resolve(subtask);
    } catch (err) {
        reject(err);
    }
})
