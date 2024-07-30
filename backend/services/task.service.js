const { updateSubtask } = require('../repositories/subtask.repository');
const taskRepository = require('../repositories/task.repository');

module.exports.createTask = async (task) => {
    try {
        let createdTodo = await taskRepository.createTask(task);
         return createdTodo;
    } catch (err) {
        throw err;
    }
}

module.exports.getAllTask = async () => {
    try {
        let tasks = await taskRepository.getAllTask();
        return tasks;
    } catch (err) {
        throw err;
    }
}

module.exports.updateTask = async (task) => {
    try {
        let taskId = task.id;
        delete task.id;
        await taskRepository.updateTask(taskId, task);
        if (task.status === 'completed') {
            await updateSubtask(taskId, { status: 'completed' });
        }
        task = await taskRepository.getAllTask();
        return task
    } catch (err) {
        throw err;
    }
}
