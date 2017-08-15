const Task = require('../models/task');

module.exports.createTask = () => {
    console.log(Task);
}

module.exports.findAll = (req,res) => {
    Task.find((error,tasks) => {
      if (error) return res.json(error)

        res.json(tasks);
    });
}