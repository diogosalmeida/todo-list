module.exports = (app) => {
    app.get('/tasks', (req, res) => {
        app.controllers.task.findAll(req,res);
    })
}