const taskService = require('../services/task.service');

module.exports.createTask = (req, res) => {
    taskService.createTask(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log("----err", err)
            res.status(400).json({ message: "Error occurred!", err });
        })
}

module.exports.getAllTask = (req, res) => {
    taskService.getAllTask()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log("----err", err)
            res.status(400).json({ message: "Error occurred!", err });
        })
}

module.exports.updateTask = (req, res) => {
    taskService.updateTask(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log("----err", err)
            res.status(400).json({ message: "Error occurred!", err });
        })
}
