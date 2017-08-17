module.exports = app => {
    const moment = require('../../helpers/moment');

    app.get('/tasks', (req, res) => {
        app.controllers.task.findAll(req,res);
    })
    
    app.get('/tasks/:id',(req, res) => {
      let id = req.params.id;  
      app.controllers.task.findTask(req, res, id)
    })

    app.post('/create-task',(req, res) => {

       const task = {
        title : req.body.title,
        author : req.body.author,
        bodyTask : req.body.bodyTask,
        comments : {
            bodyComment: req.body.bodyComment,
            date: moment()
        },
        endDate : moment()
       }
        
      app.controllers.task.createTask(task, req, res)
    });


    app.put('/update-task/:id',(req, res) => {
        let id = req.params.id;
        app.controllers.task.updateTask(req, res, id)
    })

}