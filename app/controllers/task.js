const Task = require('../models/task');
const moment = require('../../helpers/moment');

module.exports.findAll = (req, res) => {
    Task.find((error, tasks) => {
        if (error) return res.json(error)
        res.json(tasks);
    });
}
module.exports.createTask = (task, req, res) => {
    const taskeInstance = new Task(task);
    taskeInstance.save((error, task) => {
        if (error) return res.json(error);
        res.json(task);
    });
}
module.exports.updateTask = (req, res, id, taskUpdate) => {
    let query = Task.where({ _id: id }).update({
        title: req.body.title,
        author: req.body.author,
        bodyTask: req.body.bodyTask,
        bodyComment: req.body.bodyComment
    },(error, task)=>{
        if(error) res.json(error);
        res.json(task)
    });
}
module.exports.findTask = (req,res, id) => {
    let query = Task.where({ _id: id });
    query.findOne((error, task)=>{
        if(error) res.json(error);
        res.json(task)
    });
}