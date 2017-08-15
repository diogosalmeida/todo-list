const Task = require('../models/task');


module.exports.findAll = (req,res) => {
    Task.find((error,tasks) => {
        if (error) return res.json(error)
        res.json(tasks);
    });
}

module.exports.createTask = (task, req, res) => {
    const taskeInstance = new Task(task);
    taskeInstance.save((error,task) => {
      if(error) return res.json(error);
      res.json(task);
    });
 }