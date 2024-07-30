const subtaskService = require('../services/subtask.service');

module.exports.createSubtask = (req, res) => {
    console.log(req);
    subtaskService.createSubtask(req.body)
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log("----err", err)
            res.status(400).json({ message: "Error occurred!", err });
        })
}

module.exports.updateSubtask = (req, res) => {
    subtaskService.updateSubtask(req.body)
        .then((data) => {
            // console.log("gagaga",data)
            res.status(200).json(data);
        })
        .catch((err) => {
            console.log("----err", err)
            res.status(400).json({ message: "Error occurred!", err });
        })
}
