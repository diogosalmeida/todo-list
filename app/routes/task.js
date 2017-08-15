module.exports = (app) => {
    const moment = require('../../helpers/moment');

    app.get('/tasks', (req, res) => {
        app.controllers.task.findAll(req,res);
    })

    app.post('/create-task',(req, res) => {

       const task = {
        title : "Levar as crianças na escola",
        author : "Diogo Almeida",
        body : "Ao meio dia de hoje terei de levar as crianças na escola",
        comments : {
            body: "Não esquece de pegar o lanche dos muleque",
            date: moment()
        },
        likes : 1,
        endDate : moment()
       }
        
       app.controllers.task.createTask(task, req, res)
    });
}